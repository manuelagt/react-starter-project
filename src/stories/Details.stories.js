import React from "react";
import { Details } from "../Components/NewDesign/Details";

export default {
  title: "Details"
};

const pokemon = {
  name: "Bulbasaur",
  id: 1,
  base_experience: 64,
  height: 7,
  weight: 69,
  sprites: {
    front_default:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
  },
  stats: [
    {
      base_stat: 45,
      stat: {
        name: "Speed"
      }
    },
    {
      base_stat: 65,
      stat: {
        name: "Special Defense"
      }
    },
    {
      base_stat: 65,
      stat: {
        name: "Special Attack"
      }
    },
    {
      base_stat: 49,
      stat: {
        name: "Defense"
      }
    },
    {
      base_stat: 49,
      stat: {
        name: "Attack"
      }
    },
    {
      base_stat: 45,
      stat: {
        name: "HP"
      }
    }
  ],
  types: ["Poison", "Grass"]
};

export const regular = () => <Details pokemon={pokemon} />;
