import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/core/store/config/axiosBaseQuery";
import formatQuery from "@/core/utils/queryFormatter";
import { QueryFunction } from "@/core/types/query";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_STOCKS_API_URI }),
  endpoints: (builder) => ({
    symbolIntradayStock: builder.query<number[][], string>({
      query: (symbol) => ({
        url: formatQuery({
          function: QueryFunction.SYMBOL_TIME_SERIES_INTRADAY,
          params: { symbol, interval: "5min", outputsize: "full" },
        }),
        method: "GET",
      }),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transformResponse: (response: any) => {
        const stockData: {
          [key: string]: {
            "1. open": string;
            "2. high": string;
            "3. low": string;
            "4. close": string;
          };
        } = response?.["Time Series (5min)"];
        const seriesData = Object.entries(stockData).map(([date, values]) => [
          new Date(date).getTime(),
          parseFloat(values?.["1. open"]),
          parseFloat(values?.["2. high"]),
          parseFloat(values?.["3. low"]),
          parseFloat(values?.["4. close"]),
        ]);

        console.log(JSON.stringify(seriesData));

        return seriesData;
      },
    }),
  }),
});

export const { useSymbolIntradayStockQuery } = stocksApi;
