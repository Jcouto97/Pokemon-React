import React from "react";
import PokemonPage from "./pages/pokemonPage/PokemonPage";
import Theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonPage />} />
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
