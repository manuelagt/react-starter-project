import React from "react";
import styles from "./styles.module.scss";
import { CharacteristicsHeader } from "./CharacteristicsHeader";
import { About } from "./About";

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

export function Characteristics({ pokemon }: Props) {
  return (
    <div className={styles.background}>
      <CharacteristicsHeader />
      <About height={pokemon.height} weight={pokemon.weight} />
    </div>
  );
}
