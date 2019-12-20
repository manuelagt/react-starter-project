import React from "react";
import { Pokedex } from "../Components/NewDesign/Pokedex";

export default {
  title: "Pokedex"
};

const pokemons = [
  {
    name: "Bulbasaur",
    id: 1,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  {
    name: "Ivysaur",
    id: 2,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
  },
  {
    name: "Venusaur",
    id: 3,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
  },
  {
    name: "Charmander",
    id: 4,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
  },
  {
    name: "Charmeleon",
    id: 5,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
  },
  {
    name: "Charizard",
    id: 6,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
  },
  {
    name: "Squirtle",
    id: 7,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
  },
  {
    name: "Wartortle",
    id: 8,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
  },
  {
    name: "Blastoise",
    id: 9,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  },
  {
    name: "Caterpie",
    id: 10,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
  }
];

export const regular = () => <Pokedex pokemons={pokemons} />;
