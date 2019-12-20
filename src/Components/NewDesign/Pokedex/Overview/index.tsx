import React from "react";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  url: string;
  id: number;
}

export function Overview({ name, url, id }: Props) {
  return (
    <div className={styles.rectangle}>
      <div className={styles.top}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.id}>#{id}</p>
      </div>
      <img className={styles.imagen} src={url} alt={name} />
    </div>
  );
}
