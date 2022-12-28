export type RollFullType = {
    id: string;
    title: string;
    structure: string;
    types: number[];
    price: number[];
    imageUrl: string;
    category: number;
    rating: number;
};
  
export interface IRollItems {
    items: RollFullType[];
    count: number;
};
  
export type FetchRollArgsType = {
    currentPage: number;
    itemsPerPage: number;
    category: string;
    sort: string;
    orderType: string;
    search: string
};

export type RollType = {
    id: string;
    title: string;
    structure: string;
    price: number[];
    imageUrl: string;
    types: number[];
};
  
export interface IRollSliceState {
    items: RollType[];
    countRolls: number;
    status: Status
};
  
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
};