import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Pokemon from "../../components/pokemon/Pokemon";
import { Container, Grid, ContainerButton, Button, IconImage } from "./styles";
import { IFetchedResults, IFetchedPokemon, IPokemonData } from "./../../types";
import { useSearchStore } from "./../../stores/search";
import frontArrow from "./../../assets/front.png";
import backArrow from "./../../assets/back.png";
import { Link } from "react-router-dom";

/*
name no /pokemon .results
id e imagem no url que esta no /{name} ou {id}
fazer fetch para nome e depois para os outros 2

*/

function PokemonPage() {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  //aqui o state hook
  const searchInput = useSearchStore((state) => state.search);

  useEffect(() => {
    if (searchInput) {
      fetchSinglePokemon();
    } else {
      fetchAllPokemon();
    }

    console.log(searchInput);
  }, [searchInput, currentPage]);

  const fetchAllPokemon = async () => {
    //OFFSET nr de pokes a dar skip por pagina usando o limit
    const skip = currentPage * 20;

    const responseResults = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${skip}&limit=20`
    );
    const json = await responseResults.json();
    const pokemonResults: IFetchedResults[] = json.results;

    //Promise all porque vamos iterar sobre 1 array de promises e quero que todas se resolvam antes de retornar
    const pokemonInfo = await Promise.all(
      (pokemonResults as IFetchedResults[]).map(
        async (pokemon: IFetchedResults) => {
          //para aceder a prop url dentro dos results:
          const response = await fetch(pokemon.url);
          const data: IFetchedPokemon = await response.json();

          return {
            image: data?.sprites?.front_default,
            id: data.id,
            name: data.forms[0].name,
          } as IPokemonData;
        }
      )
    );
    setPokemonInfo(pokemonInfo);
  };

  //vou buscar 1 unico pokemon através do searchInput e guardo na info para renderizar
  const fetchSinglePokemon = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchInput}`
    );
    const data = (await response.json()) as IFetchedPokemon;
    console.log(data);
    setPokemonInfo([
      {
        image: data?.sprites?.front_default,
        id: data.id,
        name: data.forms[0].name,
      } as IPokemonData,
    ]);
  };

  const pageButtons = () => (
    <ContainerButton>
      <Button onClick={() => setCurrentPage((prev) => prev + 1)}>
        {/*automaticamente vai buscar o ultimo state*/}
        <IconImage src={backArrow} alt="Previous" />
      </Button>
      <Button onClick={() => setCurrentPage((prev) => prev - 1)}>
        <IconImage src={frontArrow} alt="Next" />
      </Button>
    </ContainerButton>
  );

  return (
    <>
      <Header />
      <Container>
        <Grid>
          {pokemonInfo.map((pokemon, index) => {
            return (
              <Link key={index} to={`/pokemon/${pokemon.id}`}>
                <Pokemon pokemon={pokemon} />
              </Link>
            );
          })}
        </Grid>
        {pageButtons()}
      </Container>
    </>
  );
}

//teste
export default PokemonPage;
