import React, { useEffect } from "react";
import { PokeDetails } from "../PokeDetails";
import { Case } from "../Case";
import { useSelectedPokemon } from "../../Context/SelectedPokemon";
import { useParams } from "react-router-dom";
import { useDocumentTitle } from "../../Hooks";

export function DetailedView() {
  const { pokemon, fetchPokemon } = useSelectedPokemon();
  const { name } = useParams();
  useDocumentTitle(`Pokedex - ${name}`);

  useEffect(() => {
    if (name !== undefined) {
      fetchPokemon(name);
    }
  }, [name, fetchPokemon]);

  return (
    <>
      <Case
        id={pokemon && pokemon.id}
        chosen={pokemon && pokemon.name}
        children={<PokeDetails/>}
        handlePrevious={() => null}
        handleNext={() => null}
      />
      }
    </>
  );
}
