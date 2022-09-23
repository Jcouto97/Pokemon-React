import React, { useEffect, useState, memo, useCallback, useMemo } from "react";
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
  Info,
  InfoContainer,
  Title,
  Ability,
  DetailsBox,
  ContainerButton,
  Button,
} from "./styles";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<IFetchedPokemon>();
  const [counter, setCounter] = useState<number>(1);

  const handleCounterIncrement = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  // const memoizedVal = useMemo(() => handleCounterIncrement(), []); ????

  const handleCounterDecrement = () => {
    if (counter > 1) setCounter(counter - 1);
  };

  //ajuda em performance este usecallback? A função não é criada sempre que a pagina renderiza,
  //mas para isso só seria benéfico se tivesse funcionalidade nesta pagina?
  const fetchPokemon = useCallback(async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((json) => setPokemonData(json));
  }, [id]);

  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

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
        <DetailsBox>
          <Info>
            <InfoContainer>
              <Title>ABILITY:</Title>
              <Ability>{pokemonData?.abilities[0].ability.name}</Ability>
            </InfoContainer>
            <InfoContainer>
              <Title>EXPERIENCE:</Title>
              <Ability>{pokemonData?.base_experience}</Ability>
            </InfoContainer>
            <InfoContainer>
              <Title>WEIGHT:</Title>
              <Ability>{pokemonData?.weight}</Ability>
            </InfoContainer>
            <InfoContainer>
              <Title>HEIGHT:</Title>
              <Ability>{pokemonData?.height}</Ability>
            </InfoContainer>
          </Info>
          <Text>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quod fuga nemo iusto eum distinctio et
            consequuntur quidem dignissimos, possimus esse iste alias nobis!
            Inventore maxime est eius eaque deserunt magnam. Unde corrupti
            beatae eligendi reprehenderit, saepe tenetur est qui ipsum aut sed
            tempora accusantium natus explicabo doloremque, corporis
            consequuntur laborum earum iusto. Nobis nemo totam expedita eos
            labore consequuntur sint. Beatae asperiores molestiae velit odit
            aperiam provident tenetur expedita ea vitae inventore laboriosam
            temporibus nesciunt eveniet et ut distinctio, cum cupiditate saepe
            esse reprehenderit ipsa aliquam, suscipit perferendis eligendi?
          </Text>
          <ContainerButton>
            <Button onClick={handleCounterDecrement}>-</Button>
            {counter}
            <Button onClick={handleCounterIncrement}>+</Button>
          </ContainerButton>
        </DetailsBox>
      </SurroundingContainer>
    </>
  );
}

export default memo(PokemonDetails);
