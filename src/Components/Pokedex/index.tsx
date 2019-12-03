import React, { useState} from 'react';
import { Pokemons } from '../Pokemons';
import { PokeDetails } from '../PokeDetails';
import { Case } from '../Case';


export function Pokedex() {
    const [chosen, setChosen] = useState("");
    const [id, setId] = useState("")

    return (
        <>
        {chosen !== ""?
            <Case id={id}
                  chosen={chosen}
                  onButtonClick={() => setChosen("")}
                  children={<PokeDetails name={chosen} handleLoad={(id: string) => setId(id)}/>}
            />
            :
            <Case id={id}
                  chosen={chosen}
                  onButtonClick={() => console.log(chosen)}
                  children={<Pokemons handleClick={(name:string) => setChosen(name)}/>}/>
        }
    </>
    );
}
