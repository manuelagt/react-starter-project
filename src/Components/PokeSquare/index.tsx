import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  url: string;
}

export function PokeSquare({ name, url }: Props) {
  return (
    <div className={styles.box}>
      <img src={url} alt="Pokeball" className={styles.image} />
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}
