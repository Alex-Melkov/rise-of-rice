import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType, ICartSliceState } from "./types";

const initialState: ICartSliceState = {
    totalPrice: 0,
    items: [],
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
      addItem(state, action: PayloadAction<CartItemType>) {
        let findItem = state.items.find((obj) => {
          return obj.unicId === action.payload.unicId;
        });
  
        if (findItem) {
          findItem.count++;
        } else {
          state.items.push({
            ...action.payload,
            count: 1,
          });
        }
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      },
      minusItem(state, action: PayloadAction<CartItemType>) {
        let findItem = state.items.find((obj) => {
          return obj.unicId === action.payload.unicId;
        });
  
        if (findItem) {
          findItem.count--;
          state.totalPrice -= findItem.price;
        }
      },
      removeItem(state, action: PayloadAction<CartItemType>) {
        let findItem = state.items.find((obj) => {
          return obj.unicId === action.payload.unicId;
        });
  
        state.items = state.items.filter((obj) => {
          return obj.unicId !== action.payload.unicId;
        });
        if (findItem) {
          state.totalPrice -= findItem.price * findItem.count;
        }
      },
      clearItems(state) {
        state.items = [];
        state.totalPrice = 0;
      },
    },
  });

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;