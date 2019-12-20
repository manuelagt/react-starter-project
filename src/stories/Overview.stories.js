import React from "react";
import { Overview } from "../Components/NewDesign/Pokedex/Overview";

export default {
  title: "Overview"
};

export const regular = () => (
  <Overview
    name="Bulbasaur"
    url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    id={1}
  />
);
