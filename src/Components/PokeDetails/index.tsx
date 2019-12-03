import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router'
import styles from './styles.module.scss';
import {Link} from "react-router-dom";
import {ReactComponent as Cross} from "../Pokedex/plus-solid.svg";
import {ReactComponent as Back} from "./arrow-left-solid.svg";

export function PokeDetails() {
    const { name } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(pokemon => {
                console.log(pokemon);
                setPokemonInfo(pokemon);
            });
    }, [name]);

    if (!pokemonInfo) {
        return null
    }

    return (
        <div className={styles.pokedex}>
            <div className={styles.cabecera}>
                <div className={styles.camara}></div>
            </div>
            <div className={styles.carcasa}>
                <div className={styles.pantalla}>
                    <Link to="/pokedex">
                        <Back className={styles.back}/>
                    </Link>
                    <div className={styles.pokemon}>
                        <img className={styles.imagen} alt={pokemonInfo.name} src={pokemonInfo.sprites.front_default}/>
                        <h1 className={styles.title}>{pokemonInfo.name}</h1>
                    </div>
                    <div className={styles.overview}>

                        <div className={styles.detailedInfo}>
                            <h2>Information:</h2>
                            <p className={styles.textoPantalla}>
                                Height: {pokemonInfo.height} decimeters.
                            </p>
                            <p className={styles.textoPantalla}>Weight: {pokemonInfo.weight} hectograms.</p>
                            <p className={styles.textoPantalla}>Base Experience: {pokemonInfo.base_experience} EXP.</p>
                            <p className={styles.textoPantalla}>Types: {pokemonInfo.types.map((type:any) =>
                                type.type.name
                            ).join(", ")}.
                            </p>
                        </div>
                        <div className={styles.stats}>
                            <h2>Base Stats:</h2>
                            {pokemonInfo.stats.map((stat: any) =>
                                <p className={styles.textoPantalla} key={stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.controller}>
                    <div className={styles.botonCircular}></div>
                    <div className={styles.barrasConPantalla}>
                        <div className={styles.barras}>
                            <div className={styles.barraVerde}></div>
                            <div className={styles.barraNaranja}></div>
                        </div>
                        <div className={styles.pantallaID}>
                            <p className={styles.id}>{pokemonInfo.id}</p>
                        </div>
                    </div>
                    <Cross className={ styles.cross }/>
                </div>
            </div>
        </div>
    );
}
