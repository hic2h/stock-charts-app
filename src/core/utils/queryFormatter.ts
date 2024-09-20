import { QueryFunction } from "@core/types/query";

const formatQuery = ({
  function: queryFunction,
  params,
}: {
  function: QueryFunction;
  params: Record<string, string>;
}): string => {
  // Limit the query functions to the ones defined in the QueryFunction enum
  if (!Object.values(QueryFunction).includes(queryFunction)) {
    throw new Error("Invalid query function");
  }
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return `/query?function=${queryFunction}&${query}`;
};

export default formatQuery;
