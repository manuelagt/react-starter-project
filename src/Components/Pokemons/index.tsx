import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { usePokemon } from "../../Context/Pokemon";
import { PokeSquare } from "../PokeSquare";

export function Pokemons() {
  const { pokemons, offset, fetchPokemons } = usePokemon();

  useEffect(() => {
    fetchPokemons(offset);
  }, [offset, fetchPokemons]);

  return (
    <div className={styles.grid}>
      {pokemons.map(({ name }) => (
        <div key={name} className={styles.box}>
          <PokeSquare name={name} />
        </div>
      ))}
    </div>
  );
}
