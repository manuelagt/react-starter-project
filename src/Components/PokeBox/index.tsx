import React from 'react';
import styles from './styles.module.scss';
import Pokeball from './pokeball.png';
import {Link} from "react-router-dom";


interface Props{
    name: string,
    url?: string,
}

export function PokeBox({ name, url }: Props) {

    return (
        <Link to={`/pokedex/${name}`} className={styles.box}>
            <img src={Pokeball} alt="Pokeball" className={styles.image}/>
            <h2 className={styles.name}>{name}</h2>
        </Link>
    );
}
