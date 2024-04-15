import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { CardsI } from "../types";

export const getCards = createAsyncThunk<CardsI[]>("oneAI/Cards", async () => {
  const response = await axiosApi.get("/cards");

  return response.data;
});
