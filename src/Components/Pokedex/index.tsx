import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';
import { PokeBox } from "../PokeBox";

export function Pokedex() {
    const [pokemons, setPokemons] = useState();
    const [pokemon, setPokemon] = useState("bulbasaur");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(res => res.json())
            .then(pokemons => {
                console.log(pokemons);
                setPokemons(pokemons);
            });
    });
    return (
        <div>

        </div>
        );
}
