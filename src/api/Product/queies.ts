import { useQuery } from "react-query";
import { getProductABC } from "./api";

export const useGetProductABCQuery = () =>
  useQuery("products/getProductsAbcType", () => getProductABC());
