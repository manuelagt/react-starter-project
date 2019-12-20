import React from "react";
import styles from "./styles.module.scss";
import { TypeTag } from "./TypeTag";

interface Props {
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  id: number;
  types: string[];
  sprites: {
    front_default: string;
  };
}

export function Header({ pokemon }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.heading}>{pokemon.name}</h1>
        <p className={styles.id}>#{pokemon.id}</p>
      </div>
      <div className={styles.tags}>
        {pokemon.types.map(type => (
          <TypeTag key={type} type={type} />
        ))}
      </div>
      <img
        className={styles.image}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
