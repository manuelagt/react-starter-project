import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { usePokemonStore } from "../../Context/PokemonStore";

interface Props {
  name: string;
}

export function PokeBox({ name }: Props) {
  const { state, fetchImage } = usePokemonStore();

  const pokemon = name ? state[name] : null;

  useEffect(() => {
    if (!pokemon && name) {
      fetchImage(name);
    }
  }, [name, fetchImage, pokemon]);

  if (!pokemon) {
    return null;
  }

  return (
    <Link to={`pokedex/${name}`} className={styles.box}>
      <img
        src={pokemon.sprites.front_default}
        alt="Pokeball"
        className={styles.image}
      />
      <h2 className={styles.name}>{name}</h2>
    </Link>
  );
}
