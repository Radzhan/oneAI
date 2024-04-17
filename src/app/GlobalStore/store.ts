import { configureStore } from "@reduxjs/toolkit";
import { oneAIReducer } from "../../store/OpenAISlice";

export const store = configureStore({
  reducer: {
    oneAI: oneAIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
