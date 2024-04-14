import { configureStore } from "@reduxjs/toolkit";
import { openAIReducer } from "../../store/OpenAISlice";

export const store = configureStore({
  reducer: {
    openAI: openAIReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
