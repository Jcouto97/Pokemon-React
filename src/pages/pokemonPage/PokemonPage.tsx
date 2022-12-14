import React, { useEffect, useState, memo, useCallback } from "react";
import Header from "../../components/header/Header";
import Pokemon from "../../components/pokemon/Pokemon";
import {
  Container,
  Grid,
} from "./styles";
import { IFetchedResults, IFetchedPokemon, IPokemonData } from "./../../types";
import { useSearchStore } from "./../../stores/search";
import { Link } from "react-router-dom";
import {
  fetchPokemons,
  fetchPokemonData,
} from "./../../services/pokemon-service";


function PokemonPage() {
  //tentei fazer aqui hook com offset sem sucesso
  let offset = 0; 
  const URL = "https://pokeapi.co/api/v2/pokemon";

  const [pokemonInfo, setPokemonInfo] = useState<IPokemonData[]>([]);

  //aqui o state hook do zustand
  const searchInput = useSearchStore((state) => state.search);

  useEffect(() => {
    if (searchInput) fetchSinglePokemon();
    else fetchAllPokemon();

    //para monitorizar scroll constantemente
    window.addEventListener("scroll", handleScroll);

    //????
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

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
    const pokemonResults = await fetchPokemons(URL, offset)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    offset += 12;
    
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
    
  }, []);

  //aqui como ele renderiza sempre que estou na pagina vale a pena o useCallback()??
  //tb n faz sentido, so se tivesse funcionalidade no details

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
      </Container>
    </>
  );
}

export default memo(PokemonPage);
