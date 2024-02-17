import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65cf998ebdb50d5e5f5b9e14.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "advert/fetchAdverts",
  async (page) => {
    const response = await axios.get(`/advert?page=${page}&limit=12`);
    return response.data;
  }
);
