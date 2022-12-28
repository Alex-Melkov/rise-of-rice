import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState, SearchRollParamsType, SortType } from "./types";

const initialState: IFilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
      name: 'популярности',
      sortProperty: 'rating',
    },
  };
  
const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
      setSearchValue(state, action: PayloadAction<string>) {
        state.searchValue = action.payload;
      },
      setCategoryId(state, action: PayloadAction<number> ) {
        state.categoryId = action.payload;
      },
      setSort(state, action: PayloadAction<SortType>) {
        state.sort = action.payload;
      },
      setCurrentPageCount(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
      },
      setFilters(state, action: PayloadAction<SearchRollParamsType>) {
        state.categoryId = Number(action.payload.categoryId);
        state.currentPage = Number(action.payload.currentPage);
        state.sort.sortProperty = action.payload.sortProperty;
      },
    },
  });

export const { setSearchValue, setCategoryId, setSort, setCurrentPageCount, setFilters } = filterSlice.actions;

export default filterSlice.reducer;