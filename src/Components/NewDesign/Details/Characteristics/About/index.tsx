import React from "react";
import styles from "./styles.module.scss";

interface Props {
  height: number;
  weight: number;
}

export function About({ height, weight }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <p className={styles.field}>Height</p>
        <p className={styles.fieldContent}>{height} dm</p>
      </div>
      <div className={styles.line}>
        <p className={styles.field}>Weight</p>
        <p className={styles.fieldContent}>{weight} hg</p>
      </div>
    </div>
  );
}
