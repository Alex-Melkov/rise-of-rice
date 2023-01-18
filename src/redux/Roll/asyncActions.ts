import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchRollArgsType, IRollItems } from "./types";

export const fetchRoll = createAsyncThunk(
    'roll/fetchRollsStatus',
    async ( params: FetchRollArgsType ) => {
      let { currentPage, itemsPerPage, category, sort, orderType, search } = params;
      let { data } = await axios.get<IRollItems>(
        `https://6358b289c26aac906f46af7c.mockapi.io/items?page=${currentPage}&limit=${itemsPerPage}&${category}&sortBy=${sort}&order=${orderType}&${search}`,
      );
      return data as IRollItems;
    },
  );
