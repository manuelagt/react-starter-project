import React from "react";
import { Overview } from "./Overview";
import styles from "./styles.module.scss";

interface Props {
  pokemons: Pokemon[];
}

interface Pokemon {
  name: string;
  id: number;
  url: string;
}

export function Pokedex({ pokemons }: Props) {
  return (
    <div className={styles.background}>
      <h1 className={styles.header}>Pokedex</h1>
      <div className={styles.grid}>
        {pokemons.map(pokemon => (
          <Overview
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            id={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}
