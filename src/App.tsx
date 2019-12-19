import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Components/Navigation";
import { PokemonProvider } from "./Context/Pokemon";
import PokemonStoreProvider from "./Context/PokemonStore";

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <PokemonStoreProvider>
          <Navigation />
        </PokemonStoreProvider>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App;
