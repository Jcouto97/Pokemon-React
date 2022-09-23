import React, { useEffect, useState, memo, useCallback } from "react";
import Header from "../../components/header/Header";
import Pokemon from "../../components/pokemon/Pokemon";
import {
  Container,
  Grid,
  ContainerButton,
  Button,
  PageButtons,
} from "./styles";
import { IFetchedResults, IFetchedPokemon, IPokemonData } from "./../../types";
import { useSearchStore } from "./../../stores/search";
import frontArrow from "./../../assets/front.png";
import backArrow from "./../../assets/back.png";
import { Link } from "react-router-dom";
import {
  fetchPokemons,
  fetchPokemonData,
} from "./../../services/pokemon-service";



function PokemonPage() {
  let offset = 0;
  const URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonInfo, setPokemonInfo] = useState<IPokemonData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  //aqui o state hook do zustand
  const searchInput = useSearchStore((state) => state.search);

  useEffect(() => {
    if (searchInput) fetchSinglePokemon();
    else fetchAllPokemon();
    window.addEventListener("scroll", handleScroll);

    //????
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, currentPage]);

  const handleScroll = (e: any) => {
    console.log("top", e.target.documentElement.scrollTop);
    console.log("win", window.innerHeight);
    console.log("height", e.target.documentElement.scrollHeight);

    //quando a distancia do topo + a height da pagina displayed é igual ou maior (+1 pq pode haver erros ligeiros) do que a height total
    //chegamos ao fim da pagina, qd chegamos ao fim da pagina damos load a + pokemons
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight //&& offset<60 //para parar depois de 60 pokemons
    ) {
      console.log("bottom");
      fetchAllPokemon();
    }
  };

  //redundante aqui o useCallback() porque so renderiza 2x (quando da mount
  // e quando acaba o fetch)

  const fetchAllPokemon = useCallback(async () => {
    //funçao do service
   
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`
    );
    const parsed = await response.json();
    const pokemonResults = parsed.results; 

    offset += 12;
    
    

    //Promise all porque vamos iterar sobre 1 array de promises e quero que todas se resolvam antes de retornar
    const pokemonInfo = await Promise.all(
      (pokemonResults as IFetchedResults[]).map(
        async (pokemon: IFetchedResults) => {
          //para aceder a prop url dentro dos results:
          const data = await fetchPokemonData(pokemon.url, null);

          return {
            image: data?.sprites?.front_default,
            id: data?.id,
            name: data?.forms[0].name,
            ability: data?.abilities[0].ability.name,
            experience: data?.base_experience,
            height: data?.height,
            weight: data?.weight,
          } as IPokemonData;
        }
      )
    );
    //para manter os que tenho e adicionar os novos 12, neste caso
    setPokemonInfo((oldPokemon) => [...oldPokemon, ...pokemonInfo]);
    
  }, [currentPage]);

  //vou buscar 1 unico pokemon através do searchInput e guardo na info para renderizar
  //aqui como ele renderiza sempre que estou na pagina vale a pena o useCallback()??
  //aqui tb n faz sentido, so fazia sentido se tivesse funcionalidade no details

  const fetchSinglePokemon = useCallback(async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchInput}`
    );
    const data = (await response.json()) as IFetchedPokemon;
    setPokemonInfo([
      {
        image: data?.sprites?.front_default,
        id: data.id,
        name: data.forms[0].name,
        ability: data?.abilities[0].ability.name,
        experience: data?.base_experience,
        height: data?.height,
        weight: data?.weight,
      } as IPokemonData,
    ]);
  }, [searchInput]);

  const pageButtons = () => (
    <ContainerButton>
      <Button onClick={() => setCurrentPage((prev) => prev + 1)}>
        {/*automaticamente vai buscar o ultimo state*/}
        <PageButtons src={backArrow} alt="Previous" />
      </Button>
      <Button onClick={() => setCurrentPage((prev) => prev - 1)}>
        <PageButtons src={frontArrow} alt="Next" />
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

export default memo(PokemonPage);
