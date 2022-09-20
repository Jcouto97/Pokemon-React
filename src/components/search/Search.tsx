import React, { FC, useState } from "react";
import { Container, Input, Glass, Button } from "./styles";
import glass from "./../../assets/search.png";
import { useSearchStore } from "../../stores/search";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  /*  const addSearch = useSearchStore(state => state.addSearch);
  const searchInput = useSearchStore(state => state.search); */

  const addSearchHandler = () => {
    useSearchStore.setState({ search: search as string | null });
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => addSearchHandler()}>
        <Glass src={glass} alt="search glass" />
      </Button>
    </Container>
  );
};

export default Search;
