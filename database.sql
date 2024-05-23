-- -- Create the database
-- CREATE DATABASE "async-await-starter-db";

CREATE TABLE pokemon (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  height INTEGER,
  weight INTEGER,
  strength_index INTEGER,
  image_url VARCHAR(255)
);
