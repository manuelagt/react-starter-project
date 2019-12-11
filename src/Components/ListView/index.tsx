import React from "react";
import { Pokemons } from "../Pokemons";
import { Case } from "../Case";
import { usePokemon } from "../../Context/Pokemon";
import { useDocumentTitle } from "../../Hooks";

export function ListView() {
  const { handlePrevious, handleNext } = usePokemon();
  useDocumentTitle("Pokedex");

  return (
    <Case
      id={-1}
      chosen={""}
      children={<Pokemons />}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />
  );
}
