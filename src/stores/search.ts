import create from "zustand";

export interface ISearch {
  search: string | null;
}

//cria hook como objeto
export const useSearchStore = create<ISearch>((set) => ({
  search: null,

}));
