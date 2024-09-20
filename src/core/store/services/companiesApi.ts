import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/core/store/config/axiosBaseQuery";
import { QueryFunction } from "@/core/types/query";
import formatQuery from "@/core/utils/queryFormatter";
import { CompanyOverview, SymbolsSearchResult } from "@/core/types/companies";

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: axiosBaseQuery({ baseUrl: import.meta.env.VITE_STOCKS_API_URI }),
  endpoints: (builder) => ({
    symbolSearch: builder.query<SymbolsSearchResult[], string>({
      query: (keyword) => ({
        url: formatQuery({
          function: QueryFunction.SYMBOL_SEARCH,
          params: { keywords: keyword },
        }),
        method: "GET",
      }),
      transformResponse: (response: {
        bestMatches: Array<Record<string, string>>;
      }) => {
        return response?.bestMatches?.map((match: Record<string, string>) => ({
          symbol: match["1. symbol"],
          name: match["2. name"],
        }));
      },
    }),
    fetchCompanyOverview: builder.query<CompanyOverview, string>({
      query: (symbol) => ({
        url: formatQuery({
          function: QueryFunction.COMPANY_OVERVIEW,
          params: { symbol },
        }),
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchCompanyOverviewQuery, useLazySymbolSearchQuery } = companiesApi;
