import React, { useEffect } from "react";
import { PokeDetails } from "../PokeDetails";
import { Case } from "../Case";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks";
import { usePokemonStore } from "../../Context/PokemonStore";

export function DetailedView() {
  const { state, fetchPokemon } = usePokemonStore();
  const { name } = useParams();
  useDocumentTitle(`Pokedex - ${name}`);
  const pokemon = name ? state[name] : null;

  useEffect(() => {
    if (name) {
      fetchPokemon(name);
    }
  }, [name, fetchPokemon, pokemon]);

  if (!pokemon) {
    return null;
  }

  return (
    <>
      <Case
        id={pokemon.id}
        chosen={pokemon.name}
        children={<PokeDetails pokemon={pokemon} />}
        handlePrevious={() => null}
        handleNext={() => null}
      />
      }
    </>
  );
}
