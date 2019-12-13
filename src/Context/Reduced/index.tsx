import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useReducer,
  Dispatch
} from "react";
import { Pokemon } from "../SelectedPokemon";

export interface ReducedContext {
  detailedPokemon: Pokemon | undefined;
  simplePokemon: SimplePokemon | undefined;
  dispatch: Dispatch<Action>;
  state: SimplePokemon | Pokemon | undefined;
  clearSelectedPokemon: () => void;
}

interface Action {
  type: string;
  payload: {
    name: string;
  };
}

export interface SimplePokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

const ReducedContext = createContext<ReducedContext>({
  detailedPokemon: undefined,
  simplePokemon: undefined,
  dispatch: () => undefined,
  state: undefined,
  clearSelectedPokemon: () => null
});

export const useReduced = () => {
  return useContext(ReducedContext);
};

interface ReducedProvider {
  children: React.ReactNode;
}

export const ReducedProvider = ({ children }: ReducedProvider) => {
  const [detailedPokemon, setDetailedPokemon] = useState<Pokemon>();
  const [simplePokemon, setSimplePokemon] = useState<SimplePokemon>();

  /*
  const fetchPokemon = useCallback(name => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(pokemon => {
        console.log(pokemon);
        setDetailedPokemon(pokemon);
      });
  }, []);
 */

  const reducer = (
    state: Pokemon | SimplePokemon | undefined,
    action: Action
  ) => {
    switch (action.type) {
      case "detailed":
        fetch(`https://pokeapi.co/api/v2/pokemon/${action.payload.name}`)
          .then(res => res.json())
          .then(detailed => {
            console.log(detailed);
            setDetailedPokemon(detailed);
            state = detailed;
          });
        return state;
      case "simple":
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${action.payload.name}/`)
          .then(res => res.json())
          .then(simple => {
            console.log(simple);
            setSimplePokemon({ ...simple, name: action.payload.name });
            state = simple;
          });
        return state;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, undefined);

  const clearSelectedPokemon = useCallback(() => {
    setDetailedPokemon(undefined);
  }, [setDetailedPokemon]);

  const contextState = {
    detailedPokemon: detailedPokemon,
    simplePokemon: simplePokemon,
    dispatch: dispatch,
    state: state,
    clearSelectedPokemon
  };

  return (
    <ReducedContext.Provider value={contextState}>
      {children}
    </ReducedContext.Provider>
  );
};
