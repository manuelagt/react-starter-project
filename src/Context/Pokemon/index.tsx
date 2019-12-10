import React, {createContext, useContext, useCallback, useState} from 'react'

export interface PokemonContext {
    pokemons: Pokemon[],
    offset: number,
    count: number,
    handlePrevious: () => void,
    handleNext: () => void,
    fetchPokemons: (offset: number) => Promise<void>,
}

interface Pokemon {
    name: string,
    url: string,
}

const PokemonContext = createContext<PokemonContext>({
    pokemons: [],
    offset: 0,
    count: 0, //Aqui que pongo??
    handlePrevious: () =>  null,
    handleNext: () => null,
    fetchPokemons: (offset:number) => Promise.resolve(),
    });

export const usePokemon = () => {
    return useContext(PokemonContext);
}

interface PokemonProvider {
    children: React.ReactNode
}

export const PokemonProvider = ( {children}: PokemonProvider) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [count, setCount] = useState()

    const fetchPokemons = useCallback((offset: number) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
            .then(res => res.json())
            .then(pokemons => {
                console.log(pokemons);
                setPokemons(pokemons.results);
                setCount(pokemons.count);
                setTitle();
            });
    }, []);


    const setTitle = useCallback( () => {
        const el: HTMLElement | null = document.getElementById("title");
        if(el){
            const definitelyAnElement: HTMLElement = el;
            definitelyAnElement.innerText = "Pokedex";
        }

        return null;

    }, [])

    const handlePrevious = useCallback( () => {
        if(offset === 0){
            setOffset(960)
        }else{
            setOffset(offset - 20);
        }
    }, [offset])//En el deps tengo que meter algo??

    const handleNext = useCallback(() => {
        if(offset === 960){
            setOffset(0)
        }else{
            setOffset(offset + 20);
        }
    }, [offset])

    const state = {
        pokemons: pokemons,
        offset: offset,
        count: count,
        handleNext,
        handlePrevious,
        fetchPokemons,
    }


    return(<PokemonContext.Provider value={state}>{children}</PokemonContext.Provider> )

}