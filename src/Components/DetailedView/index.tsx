import React, {useEffect} from 'react';
import { PokeDetails } from '../PokeDetails';
import { Case } from '../Case';
import {useSelectedPokemon } from "../../Context/SelectedPokemon";
import { useParams } from 'react-router-dom';

export function DetailedView() {
    const {pokemon, fetchPokemon} = useSelectedPokemon();
    const { name } = useParams();

    useEffect(() => {
        if(name !== undefined){
            fetchPokemon(name);
        }
    }, [name, fetchPokemon]);


    return (
        <>
                <Case id={pokemon && pokemon.id}
                      chosen={pokemon && pokemon.name}
                      children={<PokeDetails name={pokemon && pokemon.name}/>}
                      handlePrevious={() => null}
                      handleNext={() => null}
                />
            }
        </>
    );
}