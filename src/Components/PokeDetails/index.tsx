import React, {useState, useEffect} from 'react';
import styles from './styles.module.scss';

interface Props{
    name: string,
    handleLoad: Function,
}

export function PokeDetails({name, handleLoad}: Props) {
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(pokemon => {
                console.log(pokemon);
                setPokemonInfo(pokemon);
                handleLoad(pokemon.id);

            });
    }, [name, handleLoad]);

    if (!pokemonInfo) {
        return null
    }

    return (
                <div className={styles.pantalla}>
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
                                <p key={stat.stat.name} className={styles.textoPantalla}>{stat.stat.name}: {stat.base_stat}</p>
                            )}
                        </div>
                    </div>
                </div>
    );
}
