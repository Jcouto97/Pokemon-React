import React, { useState, useCallback } from "react";
import { Container, Input, Glass, Button } from "./styles";
import glass from "./../../assets/search.png";
import { useSearchStore } from "../../stores/search";

const Search = () => {
  const [search, setSearch] = useState<string>('');
  /*  const addSearch = useSearchStore(state => state.addSearch);
  const searchInput = useSearchStore(state => state.search); */

  //para nao dar set state sempre que a componente é montada ponho useCallback() para
  //hook ficar a escuta de alterações no state do search para recriar esta funçao
  
  /* const addSearchHandler = () => {
    useSearchStore.setState({ search: search as string | null });
  }; */

  const addSearchHandler = useCallback((search : string) => {
    setSearch(search)
  }, [])

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
