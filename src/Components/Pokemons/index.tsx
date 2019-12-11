import React, {useEffect} from 'react';
import styles from "./styles.module.scss";
import { PokeBox } from '../PokeBox';
import {usePokemon} from "../../Context/Pokemon";

export function Pokemons() {
    const { pokemons, offset, fetchPokemons} = usePokemon();

    useEffect(() => {
            fetchPokemons(offset);
    }, [offset, fetchPokemons]);

    return (
                <div className={styles.grid}>
                    {pokemons.map(({ name}) =>
                        <div key={name} className={styles.box}>
                        <PokeBox name={name}/>
                        </div>
                    )}
                </div>
    );
}
