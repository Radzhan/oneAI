import { createSlice } from "@reduxjs/toolkit";

interface openAIState {
}

const initialState: openAIState = {};

export const openAISlice = createSlice({
  name: "opneAI",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const openAIReducer = openAISlice.reducer;
