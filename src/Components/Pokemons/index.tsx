import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { usePokemon } from "../../Context/Pokemon";
import { PokeSquare } from "../PokeSquare";

export function Pokemons() {
  const { pokemons, offset, fetchPokemons } = usePokemon();

  useEffect(() => {
    fetchPokemons(offset);
  }, [offset, fetchPokemons]);

  console.log(pokemons);

  return (
    <div className={styles.grid}>
      {pokemons.map(pokemon => (
        <div key={pokemon.name} className={styles.box}>
          <PokeSquare name={pokemon.name} />
        </div>
      ))}
    </div>
  );
}
