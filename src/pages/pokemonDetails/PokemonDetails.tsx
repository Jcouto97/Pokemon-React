import React, { useEffect, useState } from "react";
import { IFetchedPokemon } from "../../types";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import {
  Container,
  Image,
  ID,
  Name,
  Text,
  SurroundingContainer,
} from "./styles";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<IFetchedPokemon>();

  useEffect(() => {
    const fetchPokemon = async () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((json) => setPokemonData(json));
    };
    fetchPokemon();
  });

  return (
    <>
      <Header />
      <SurroundingContainer>
        <Container>
          <Image
            src={pokemonData?.sprites?.front_default}
            alt="pokemon image"
          />
          <ID>#{pokemonData?.id}</ID>
          <Name>{pokemonData?.forms[0].name}</Name>
        </Container>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga
          nemo iusto eum distinctio et consequuntur quidem dignissimos, possimus
          esse iste alias nobis! Inventore maxime est eius eaque deserunt
          magnam. Unde corrupti beatae eligendi reprehenderit, saepe tenetur est
          qui ipsum aut sed tempora accusantium natus explicabo doloremque,
          corporis consequuntur laborum earum iusto. Nobis nemo totam expedita
          eos labore consequuntur sint. Beatae asperiores molestiae velit odit
          aperiam provident tenetur expedita ea vitae inventore laboriosam
          temporibus nesciunt eveniet et ut distinctio, cum cupiditate saepe
          esse reprehenderit ipsa aliquam, suscipit perferendis eligendi?
          Praesentium. Deleniti quo quia incidunt placeat expedita ipsa nihil
          modi assumenda architecto odio vitae sint consequuntur dolor
          distinctio velit laboriosam, dignissimos, repellat dolorem asperiores
          ipsam similique et aperiam hic neque. Sunt. Officiis vitae officia
          laborum, rem aspernatur dignissimos totam laudantium optio? Sed omnis
          voluptates quo, asperiores architecto dolore? Totam obcaecati
          exercitationem dolores ea, illo incidunt ipsam eligendi tenetur
          quibusdam voluptate necessitatibus!
        </Text>
      </SurroundingContainer>
    </>
  );
}

export default PokemonDetails;
