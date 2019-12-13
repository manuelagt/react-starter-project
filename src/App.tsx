import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { PokemonProvider } from "./Context/Pokemon";
import { SelectedPokemonProvider } from "./Context/SelectedPokemon";
import { ReducedProvider } from "./Context/Reduced";

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <SelectedPokemonProvider>
          <ReducedProvider>
            <Navigation />
          </ReducedProvider>
        </SelectedPokemonProvider>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
