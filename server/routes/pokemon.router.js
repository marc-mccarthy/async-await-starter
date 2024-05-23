const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool');

router.get('/', async (req, res) => {
  try {
    const allPokemon = await getAllPokemon();
    res.json(allPokemon);
  } catch (error) {
    console.error('Error fetching all Pokémon:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=50'
    );
    const pokemonList = response.data.results;
    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url);
        return pokemonResponse.data;
      })
    );

    await insertPokemon(pokemonData);

    const allPokemon = await getAllPokemon();

    res.json(allPokemon);
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const insertPokemon = async (pokemonData) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const query = `
      INSERT INTO pokemon (name, height, weight, strength_index, image_url)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (name) DO NOTHING
    `;
    for (const pokemon of pokemonData) {
      const strengthIndex = calculateStrengthIndex(pokemon.stats);
      await client.query(query, [
        pokemon.name,
        pokemon.height,
        pokemon.weight,
        strengthIndex,
        pokemon.sprites.front_default,
      ]);
    }

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error inserting Pokémon:', error);
    throw error;
  } finally {
    client.release();
  }
};

const calculateStrengthIndex = (stats) => {
  const attackStat =
    stats.find((stat) => stat.stat.name === 'attack')?.base_stat || 0;
  const defenseStat =
    stats.find((stat) => stat.stat.name === 'defense')?.base_stat || 0;
  const hpStat = stats.find((stat) => stat.stat.name === 'hp')?.base_stat || 0;
  const strengthIndex = attackStat + defenseStat + hpStat;
  return strengthIndex;
};

const getAllPokemon = async () => {
  const client = await pool.connect();
  try {
    const query = 'SELECT * FROM pokemon ORDER BY strength_index DESC';
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error('Error fetching all Pokémon:', error);
    throw error;
  } finally {
    client.release();
  }
};

module.exports = router;
