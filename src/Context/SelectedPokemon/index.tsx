import React, { createContext, useContext, useCallback, useState } from "react";

export interface SelectedPokemonContext {
  pokemon: Pokemon | undefined;
  fetchPokemon: (name: string) => Promise<void>;
  clearSelectedPokemon: () => void;
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: Sprite;
  stats: Stats[];
  types: string[];
}

interface Sprite {
  front_default: string;
}

interface Stats {
  base_stat: number;
  stat: Stat;
}

interface Stat {
  name: string;
}

const SelectedPokemonContext = createContext<SelectedPokemonContext>({
  pokemon: undefined,
  fetchPokemon: () => Promise.resolve(),
  clearSelectedPokemon: () => null
});

export const useSelectedPokemon = () => {
  return useContext(SelectedPokemonContext);
};

interface SelectedPokemonProvider {
  children: React.ReactNode;
}

export const SelectedPokemonProvider = ({
  children
}: SelectedPokemonProvider) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const fetchPokemon = useCallback(name => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(pokemon => {
        console.log(pokemon);
        setPokemon(pokemon);
      });
  }, []);

  const clearSelectedPokemon = useCallback(() => {
    setPokemon(undefined);
  }, [setPokemon]);

  const state = {
    pokemon: pokemon,
    fetchPokemon,
    clearSelectedPokemon
  };

  return (
    <SelectedPokemonContext.Provider value={state}>
      {children}
    </SelectedPokemonContext.Provider>
  );
};
