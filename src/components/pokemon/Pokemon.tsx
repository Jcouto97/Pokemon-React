import React from "react";
import { Container, Image, ID, Name } from "./styles";
import { IFetchedPokemon, IPokemonData } from "./../../types";

function Pokemon({ pokemon } : { pokemon: IFetchedPokemon | undefined }) {

  return (
    <Container>
      <Image src={pokemon?.sprites.front_default} alt="pokemon image" />
      <ID>#{pokemon?.id}</ID>
      <Name>{pokemon?.forms[0].name}</Name>
    </Container>
  );
}

export default Pokemon;
