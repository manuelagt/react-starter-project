import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Cross } from './plus-solid.svg';


interface Props {
    children: any,
    id: string,
    chosen: string,
    onButtonClick: Function,
    
    
}

export function Case({  children, id, chosen, onButtonClick, }: Props) {

    return (
        <div className={styles.pokedex}>
            <div className={styles.cabecera}>
                <div className={styles.camara}></div>
            </div>
            <div className={styles.carcasa}>
                <div className={styles.pantalla}>
                    {children}
                </div>
                <div className={styles.controller}>
                    <div className={styles.botonCircular} onClick={() => onButtonClick()}></div>
                    <div className={styles.barrasConPantalla}>
                        <div className={styles.barras}>
                            <div className={styles.barraVerde}></div>
                            <div className={styles.barraNaranja}></div>
                        </div>
                        {chosen !== ""? <div className={styles.pantallaOn}>
                            <p className={styles.text}>{id}</p>
                            </div> :
                            <div className={styles.pantallaOff}></div>}
                    </div>
                    <Cross className={styles.cross}/>
                </div>
            </div>
        </div>
    );
}
