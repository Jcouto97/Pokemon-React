import React from "react";
import { Container, Image, ID, Name } from "./styles";
import { IPokemonData } from "./../../types";

function Pokemon({ pokemon } : { pokemon: IPokemonData }) {

  return (
    <Container>
      <Image src={pokemon.image} alt="pokemon image" />
      <ID>#{pokemon.id}</ID>
      <Name>{pokemon.name}</Name>
    </Container>
  );
}

export default Pokemon;
