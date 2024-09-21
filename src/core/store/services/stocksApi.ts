import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/core/store/config/axiosBaseQuery";
import formatQuery from "@/core/utils/queryFormatter";
import { QueryFunction } from "@/core/types/query";
import { MarketDetails } from "@/core/types/stocks";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_STOCKS_API_URI }),
  endpoints: (builder) => ({
    symbolIntradayStock: builder.query<number[][], string>({
      query: (symbol) => ({
        url: formatQuery({
          function: QueryFunction.SYMBOL_TIME_SERIES_INTRADAY,
          params: { symbol, outputsize: "full", interval: "5min" },
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

        return seriesData;
      },
    }),
    globalMarketStatus: builder.query<MarketDetails[], void>({
      query: () => ({
        url: formatQuery({ function: QueryFunction.MARKET_STATUS, params: {} }),
        method: "GET",
      }),
      transformResponse: (response: { markets: MarketDetails[] }) => {
        return response?.["markets"];
      },
    }),
  }),
});

export const { useSymbolIntradayStockQuery, useGlobalMarketStatusQuery } = stocksApi;
