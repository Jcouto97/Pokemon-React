import { IFetchedResults, IFetchedPokemon } from "../types";

export const fetchPokemons = async (url: string, offset:number) => {

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`
    );
    const parsed = await response.json();
    return parsed.results as IFetchedResults[];
  } catch (e) {
    console.log("error ->", e);
  }
};

export const fetchPokemonData = async (url: string, search: string | null) => {
  //se search existe procura pokemon senao url normal
  const searchType = search
    ? `https://pokeapi.co/api/v2/pokemon/${search}`
    : url;
  try {
    const response = await fetch(searchType);
    const parsed = await response.json();
    return parsed as IFetchedPokemon;
  } catch (e) {
    console.log("error", e);
  }
};
