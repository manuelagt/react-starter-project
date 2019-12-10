import React from 'react';
import { Pokemons } from '../Pokemons';
import { Case } from '../Case';
import {usePokemon} from "../../Context/Pokemon";


export function ListView() {
    const {handlePrevious, handleNext} = usePokemon();


    return (
            <Case id={-1}
                  chosen={""}
                  children={<Pokemons/>}
                  handlePrevious={handlePrevious}
                  handleNext={handleNext}
            />
    );
}
