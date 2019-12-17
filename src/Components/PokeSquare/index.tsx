import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

interface Props {
  name?: string;
  url?: string;
}

export function PokeSquare({ name, url }: Props) {
  return (
    <Link to={`/pokedex/${name}`} className={styles.box}>
      <img src={url} alt="Pokeball" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
    </Link>
  );
}
