import React from "react";
import styles from "./styles.module.scss";
import { Header } from "./Header";
import { Characteristics } from "./Characteristics";

interface Props {
  pokemon: Pokemon;
}

interface Pokemon {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  stats: Stats[];
  types: string[];
}

interface Stats {
  base_stat: number;
  stat: Stat;
}

interface Stat {
  name: string;
}

export function Details({ pokemon }: Props) {
  return (
    <div className={styles.background}>
      <Header pokemon={pokemon} />
      <Characteristics pokemon={pokemon} />
    </div>
  );
}
