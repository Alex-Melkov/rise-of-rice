export type SearchRollParamsType = {
    categoryId: string;
    currentPage: string;
    sortProperty: 'rating' | 'price' | 'title';
  }
  
export type SortType = {
    name: 'популярности' | 'цене' | 'алфавиту' ;
    sortProperty: 'rating' | 'price' | 'title';
  }
  
export interface IFilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: SortType
  }