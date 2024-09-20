import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/core/store/config/axiosBaseQuery";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_STOCKS_API_URI }),
  endpoints: (builder) => ({}),
});

export const {} = stocksApi;
