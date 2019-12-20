import React from "react";
import styles from "./styles.module.scss";

export function CharacteristicsHeader() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.item}>About</p>
        <p className={styles.item}>Base Stats</p>
        <p className={styles.item}>Evolution</p>
        <p className={styles.item}>Moves</p>
      </div>
      <div className={styles.divisor} />
    </>
  );
}
