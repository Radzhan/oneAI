import { createSlice } from "@reduxjs/toolkit";
import { CardsI } from "../types";
import { getCards } from "./OpenAIThunks";
import { RootState } from "../app/GlobalStore/store";

interface oneAIState {
	cards: CardsI[]
}

const initialState: oneAIState = {
	cards: [],
};

export const oneAISlice = createSlice({
  name: "oneAI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
	builder.addCase(getCards.fulfilled, (state, action) => {
		state.cards = action.payload;
	});
  },
});

export const oneAIReducer = oneAISlice.reducer;
export const Cards = (state: RootState) => state.oneAI.cards;
