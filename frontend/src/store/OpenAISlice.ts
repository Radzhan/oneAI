import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/GlobalStore/store";

interface oneAIState {
  user: boolean;
}

const initialState: oneAIState = {
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
});

export const oneAIReducer = oneAISlice.reducer;
export const { setUser } = oneAISlice.actions;

export const getUser = (state: RootState) => state.oneAI.user;
