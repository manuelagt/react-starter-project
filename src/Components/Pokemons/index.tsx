import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { usePokemon } from "../../Context/Pokemon";
import { PokeBox } from "../PokeBox";

export function Pokemons() {
  const { pokemons, offset, fetchPokemons } = usePokemon();

  useEffect(() => {
    fetchPokemons(offset);
  }, [offset, fetchPokemons]);

  return (
    <div className={styles.grid}>
      {pokemons.map(pokemon => (
        <div key={pokemon.name} className={styles.box}>
          <PokeBox name={pokemon.name} />
        </div>
      ))}
    </div>
  );
}
