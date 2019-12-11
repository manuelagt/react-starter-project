import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { PokemonProvider } from "./Context/Pokemon";
import { SelectedPokemonProvider } from "./Context/SelectedPokemon";

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <SelectedPokemonProvider>
          <Navigation />
        </SelectedPokemonProvider>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
