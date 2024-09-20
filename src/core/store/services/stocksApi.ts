import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@core/store/config/axiosBaseQuery";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: axiosBaseQuery({ baseUrl: "/stocks-api" }),
  endpoints: (builder) => ({}),
});

export const {} = stocksApi;
