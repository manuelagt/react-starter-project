import React from 'react';
import styles from './styles.module.scss';
import Pokeball from './pokeball.png';


interface Props{
    name: string,
    url?: string,
    onClick: Function,
}

export function PokeBox({ name, url, onClick}: Props) {

    return (
        <button className={styles.box} onClick={() => onClick()}>
            <img src={Pokeball} alt="Pokeball" className={styles.image}/>
            <h2 className={styles.name}>{name}</h2>
        </button>
    );
}
