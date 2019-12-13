import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useReduced } from "../../Context/Reduced";

interface Props {
  name: string;
}

export function PokeSquare({ name }: Props) {
  const { state, dispatch } = useReduced();

  useEffect(() => {
    dispatch({
      type: "simple",
      payload: { name: name }
    });
  }, [dispatch, name]);

  return (
    <div className={styles.box}>
      <img
        src={state?.sprites.front_default}
        alt="Pokeball"
        className={styles.image}
      />
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}
