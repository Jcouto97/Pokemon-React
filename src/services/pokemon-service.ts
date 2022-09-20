import { IFetchedResults, IFetchedPokemon } from "../types";

export const fetchPokemons = async (url: string, page: number) => {
  //OFFSET nr de pokes a dar skip por pagina usando o limit
  const skip = page * 20;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${skip}&limit=20`
    );
    const parsed = await response.json();
    return parsed.results as IFetchedResults[];
  } catch (e) {
    console.log("error ->", e);
  }
};

export const fetchPokemonData = async (url: string, search: string | null) => {
  //se term existe procura pokemon senao url antigo
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
