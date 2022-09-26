import React, { useState, useCallback } from "react";
import { Container, Input, Glass, Button } from "./styles";
import glass from "./../../assets/search.png";
import { useSearchStore } from "../../stores/search";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  //para nao dar set state sempre que a componente é montada ponho useCallback() para
  //hook fica a escuta de alterações no state do search para recriar esta funçao

  //aqui é igual?
  //se nao usasse callback ia ser obrigado a dar componente a todo o componente
  const addSearchHandler = useCallback((search: string) => {
    //descontrui objeto do useSearchStore aqui
    useSearchStore.setState({ search });
  }, []);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => addSearchHandler(search)}>
        <Glass src={glass} alt="search glass" />
      </Button>
    </Container>
  );
};

export default Search;
