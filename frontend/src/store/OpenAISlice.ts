import { createSlice } from "@reduxjs/toolkit";
import { CardsI } from "../types";
import { getCards } from "./OpenAIThunks";
import { RootState } from "../app/GlobalStore/store";

interface oneAIState {
  cards: CardsI[];
  user: boolean;
}

const initialState: oneAIState = {
  cards: [],
  user: false,
};

export const oneAISlice = createSlice({
  name: "oneAI",
  initialState,
  reducers: {
    setUser: (state) => {
      state.user = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const oneAIReducer = oneAISlice.reducer;
export const { setUser } = oneAISlice.actions;

export const Cards = (state: RootState) => state.oneAI.cards;
export const getUser = (state: RootState) => state.oneAI.user;
