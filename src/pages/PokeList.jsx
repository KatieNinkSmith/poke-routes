import { useState, useEffect } from "react";
import ListDisplay from "../components/ListDisplay";
import PokeDisplay from "../components/PokeDisplay";
import Form from "../components/Form";
// i dont need this a
// import "./App.css";

function PokeList() {
  // thesee two have different keys in their objects
  // this one has next, previous, and results (which is an array with name and url)
  const [pokemons, setPokemons] = useState({});
  // this is an object with a lot of keys to describe an individual pokemon
  const [pokemon, setPokemon] = useState({});

  let url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  // step 1 - get the list of Pokemon from the api
  const getPokemons = async (url) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokemons(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPokemons(url);
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <p>
        You can search for a Pokemon by name or by id. If you aren't sure of the
        name, you can scroll through the list below using the 'back' and 'next'
        buttons
      </p>
      <h2>Find a Pokemon</h2>
      <Form newPokemon={setPokemon} />
      <h2>Individual Pokemon</h2>
      <PokeDisplay pokemon={pokemon} />
      {pokemon && pokemon.species ? (
        <h3>{pokemon.species.name}</h3>
      ) : (
        <h3>Search for a valid name or id</h3>
      )}
      <ListDisplay pokeList={pokemons} getPokemons={getPokemons} />
    </>
  );
}

export default PokeList;
