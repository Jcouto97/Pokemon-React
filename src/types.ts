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
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  base_experience: string;
  weight: number;
  height: number;
}

export interface IPokemonData {
  image: string;
  id: number;
  name: string;
  weight: number;
  height: number;
  ability: string;
  experience: string;
}
