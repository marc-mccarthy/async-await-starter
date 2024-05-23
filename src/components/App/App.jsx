import axios from 'axios';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const handleFillPokedex = async () => {
    try {
      const response = await axios.post('/api/pokemon');
      setPokemonList(response.data);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  return (
    <div className='app'>
      <header className='pokemon-images'>
        <img src='/images/pokemon-logo.png' alt='Pokémon Logo' />
      </header>
      <div className='fill-pokedex'>
        <button onClick={handleFillPokedex}>Fill my Pokedex</button>
      </div>
      {pokemonList.length > 0 && (
        <>
          <h2 className='strongest-heading'>
            Strongest Pound for Pound Pokémon
          </h2>
          <div className='pokemon-list'>
            {pokemonList.map((pokemon) => (
              <div className='pokemon-card' key={pokemon.id}>
                <img src={pokemon.image_url} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p className='strength-index'>
                  Strength Index: {pokemon.strength_index}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
