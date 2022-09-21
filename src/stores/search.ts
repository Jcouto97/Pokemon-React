import create from "zustand";

export interface ISearch {
  search: string | null;
  // addSearch: (search: string) => void;
}

//cria hook como objeto
//PORQUE NAO CONSIGO USAR O ADDSEARCH??
export const useSearchStore = create<ISearch>((set) => ({
  search: null,

  /* 
  addSearch: (input: string | null) => {
    set(state => ({ search: state.search, input }));
  }, */
}));
