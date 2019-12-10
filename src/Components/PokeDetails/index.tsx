import React from 'react';
import styles from './styles.module.scss';
import { useSelectedPokemon } from "../../Context/SelectedPokemon";

interface Props{
    name?: string,
}

export function PokeDetails({name}: Props) {
    const { pokemon } = useSelectedPokemon();

    if(pokemon === undefined){
        return null;
    }

    return (
                <div className={styles.pantalla}>
                    <div className={styles.pokemon}>
                        <img className={styles.imagen} alt={pokemon.name} src={pokemon.sprites.front_default}/>
                        <h1 className={styles.title}>{pokemon.name}</h1>
                    </div>
                    <div className={styles.overview}>

                        <div className={styles.detailedInfo}>
                            <h2>Information:</h2>
                            <p className={styles.textoPantalla}>
                                Height: {pokemon.height} decimeters.
                            </p>
                            <p className={styles.textoPantalla}>Weight: {pokemon.weight} hectograms.</p>
                            <p className={styles.textoPantalla}>Base Experience: {pokemon.base_experience} EXP.</p>
                            <p className={styles.textoPantalla}>Types: {pokemon.types.map((type:any) =>
                                type.type.name
                            ).join(", ")}.
                            </p>
                        </div>
                        <div className={styles.stats}>
                            <h2>Base Stats:</h2>
                            {pokemon.stats.map((result: any) =>
                                <p key={result.stat.name} className={styles.textoPantalla}>{result.stat.name}: {result.base_stat}</p>
                            )}
                        </div>
                    </div>
                </div>
    );
}
