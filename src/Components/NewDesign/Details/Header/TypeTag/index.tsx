import React from "react";
import styles from "./styles.module.scss";

interface Props {
  type: string;
}

export function TypeTag({ type }: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.tag}>{type}</h3>
    </div>
  );
}
