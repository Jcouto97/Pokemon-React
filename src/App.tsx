import React from "react";
import PokemonPage from "./pages/pokemonPage/PokemonPage";
import Theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./pages/pokemonDetails/PokemonDetails";

function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonPage />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
