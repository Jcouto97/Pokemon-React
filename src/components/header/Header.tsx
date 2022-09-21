import { memo } from "react";
import { Container, Title, Dex } from "./styles";
import Search from "../search/Search";
import { Link } from "react-router-dom";

//memo porque o Header vai ser usado varias vezes
//se nada se alterar nao precisa de ser re-renderizado

const Header = () => {
  return (
    <Link to="/">
      <Container>
        <Title>
          Poke<Dex>Dex</Dex>
        </Title>
        <Search />
      </Container>
    </Link>
  );
};

export default memo(Header);
