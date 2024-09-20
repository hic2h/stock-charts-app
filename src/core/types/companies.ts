export type SymbolsSearchResult = {
  symbol: string;
  name: string;
};

export type CompanyOverview = {
  Symbol: string;
  Name: string;
  AssetType: string;
  Exchange: string;
  Currency: string;
  Sector: string;
  Industry: string;
  MarketCapitalization: number;
  PERatio: number;
  Address: string;
  Description: string;
  EBITDA: number;
  FiscalYearEnd: string;
  OfficialSite: string;
  RevenueTTM: number;
  DividendPerShare: number;
  SharesOutstanding: number;
};
