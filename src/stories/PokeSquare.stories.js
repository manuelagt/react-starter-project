import React from "react";
import { PokeSquare } from "../Components/PokeSquare";

export default {
  title: "PokeSquare"
};

export const regular = () => (
  <PokeSquare
    name="Bulbasaur"
    url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  />
);
