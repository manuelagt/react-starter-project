import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Cross } from "./plus-solid.svg";
import { useHistory } from "react-router-dom";
import { useSelectedPokemon } from "../../Context/SelectedPokemon";

interface Props {
  children: React.ReactNode;
  id?: number;
  chosen?: string;
  handlePrevious?: () => void;
  handleNext?: () => void;
}

export function Case({
  children,
  id,
  chosen,
  handleNext,
  handlePrevious
}: Props) {
  const { clearSelectedPokemon } = useSelectedPokemon();
  const history = useHistory();

  function handleClick() {
    clearSelectedPokemon();
    history.push("/pokedex");
  }

  return (
    <div className={styles.pokedex}>
      <div className={styles.cabecera}>
        <div className={styles.camara} />
      </div>
      <div className={styles.carcasa}>
        <div className={styles.pantalla}>{children}</div>
        <div className={styles.controller}>
          <button onClick={handleClick} className={styles.botonCircular} />
          <div className={styles.barrasConPantalla}>
            <div className={styles.barras}>
              {handlePrevious ? (
                <div className={styles.barraVerde} onClick={handlePrevious} />
              ) : (
                <div className={styles.barraVerde} />
              )}
              {handlePrevious ? (
                <div className={styles.barraNaranja} onClick={handleNext} />
              ) : (
                <div className={styles.barraNaranja} />
              )}
            </div>
            {chosen !== "" ? (
              <div className={styles.pantallaOn}>
                <p className={styles.text}>{id}</p>
              </div>
            ) : (
              <div className={styles.pantallaOff} />
            )}
          </div>
          <Cross className={styles.cross} />
        </div>
      </div>
    </div>
  );
}
