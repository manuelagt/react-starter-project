import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';
import { PokeBox } from "../PokeBox";
import { ReactComponent as Cross } from './plus-solid.svg';

export function Pokedex() {
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(res => res.json())
            .then(pokemons => {
                console.log(pokemons);
                setPokemons(pokemons);
            });
    }, []);

    if (!pokemons) {
        return null
    }

    return (
        <div className={styles.pokedex}>
            <div className={styles.cabecera}>
                <div className={styles.camara}></div>
            </div>
            <div className={styles.carcasa}>
                <div className={styles.pantalla}>
                    {pokemons.results.map((result: any) =>
                        <div key={result.name} className={styles.box}>
                        <PokeBox name={result.name}/>
                        </div>
                    )}
                </div>
                <div className={styles.controller}>
                    <div className={styles.botonCircular}></div>
                    <div className={styles.barrasConPantalla}>
                        <div className={styles.barras}>
                            <div className={styles.barraVerde}></div>
                            <div className={styles.barraNaranja}></div>
                        </div>
                        <div className={styles.pantallaID}></div>
                    </div>
                    <Cross className={styles.cross}/>
                </div>
            </div>
        </div>
    );
}
