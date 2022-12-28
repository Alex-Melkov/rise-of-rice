import { createSlice } from "@reduxjs/toolkit";
import { fetchRoll } from "./asyncActions";
import { IRollSliceState, Status } from "./types";

const initialState: IRollSliceState = {
    items: [],
    countRolls: 0,
    status: Status.LOADING   //'loading' | 'success' | 'error';
  };
  
const rollSlice = createSlice({
    name: 'roll',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchRoll.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      }),
      builder.addCase(fetchRoll.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.countRolls = action.payload.count;
        state.status = Status.SUCCESS;
      }),
      builder.addCase(fetchRoll.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      })
    }
});
  
export default rollSlice.reducer;