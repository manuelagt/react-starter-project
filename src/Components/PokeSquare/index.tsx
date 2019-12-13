import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useReduced } from "../../Context/Reduced";
import { Link } from "react-router-dom"

interface Props {
  name: string;
}

export function PokeSquare({ name }: Props) {
  const { simplePokemon, dispatch } = useReduced();

  useEffect(() => {
    dispatch({
      type: "simple",
      payload: { name: name }
    });
  }, [dispatch, name]);

  return (
    <Link to={`/pokedex/${name}`} className={styles.box}>
      <img
        src={simplePokemon && simplePokemon.sprites.front_default}
        alt="Pokeball"
        className={styles.image}
      />
      <h2 className={styles.name}>{name}</h2>
    </Link>
  );
}
