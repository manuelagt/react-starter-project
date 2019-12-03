import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';
import { PokeBox } from '../PokeBox';

interface Props {
    handleClick: Function,
}

export function Pokemons({handleClick}: Props) {

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
                <div className={styles.grid}>
                    {pokemons.results.map((result: any) =>
                        <div key={result.name} className={styles.box}>
                        <PokeBox name={result.name} onClick={() => handleClick(result.name)}/>
                        </div>
                    )}
                </div>
    );
}
