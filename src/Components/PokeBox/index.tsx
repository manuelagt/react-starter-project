import React from 'react';
import styles from './styles.module.scss';
import Pokeball from './pokeball.png';

interface Props{
    name: string,
    url?: string,
}

export function PokeBox({ name, url }: Props) {
    return (
        <div className={styles.box}>
            <img src={Pokeball} alt="Pokeball" className={styles.image}/>
            <h2 className={styles.name}>Nombre Pokemon</h2>
        </div>
    );
}
