import React, { useContext, useReducer, useCallback } from "react";

const PokemonStoreContext = React.createContext<{
  state: Record<string, Pokemon>;
  fetchPokemon: (name: string) => Promise<void>;
}>({
  state: {},
  fetchPokemon: () => Promise.resolve()
});

export function usePokemonStore() {
  return useContext(PokemonStoreContext);
}

export interface Pokemon {
  name: string;
  id: number;
  base_experience?: number;
  height?: number;
  weight?: number;
  sprites: {
    front_default: string;
  };
  stats?: Stats[];
  types?: string[];
}

interface Stats {
  base_stat: number;
  stat: Stat;
}

interface Stat {
  name: string;
}

function PokemonStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(
    (state: Record<string, Pokemon>, action) => {
      switch (action.type) {
        case "set-pokemon-details": {
          const pokemon = action.payload;
          const name = pokemon.name;

          return {
            ...state,
            [name]: {
              name: pokemon.name,
              id: pokemon.id,
              base_experience: pokemon.base_experience,
              height: pokemon.height,
              weight: pokemon.weight,
              sprites: {
                front_default: pokemon.sprites.front_default
              },
              stats: pokemon.stats,
              types: pokemon.types
            }
          };
        }
        default:
          return state;
      }
    },
    {}
  );

  const fetchPokemon = useCallback(name => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(pokemon => {
        dispatch({ type: "set-pokemon-details", payload: pokemon });
      });
  }, []);

  return (
    <PokemonStoreContext.Provider value={{ state, fetchPokemon }}>
      {children}
    </PokemonStoreContext.Provider>
  );
}

export default PokemonStoreProvider;
