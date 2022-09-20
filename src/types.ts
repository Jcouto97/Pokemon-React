export interface IFetchedResults {
  name: string;
  url: string;
}

export interface IFetchedPokemon {
  id: number;
  sprites: {
    front_default: string;
  };
  forms: [
    {
      name: string;
    }
  ];
}

export interface IPokemonData {
  image: string;
  id: number;
  name: string;
}
