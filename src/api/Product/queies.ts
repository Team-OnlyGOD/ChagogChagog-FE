import { useQuery } from "react-query";
import { getInAndOutcoming, getProductABC, getProductDetail } from "./api";

export const useGetProductABCQuery = () =>
  useQuery("products/getProductsAbcType", () => getProductABC());

export const useGetProductDetail = (id: string) =>
  useQuery("products/getProductDetail", () => getProductDetail(id));

export const useGetInAndOutcoming = (id: string) =>
  useQuery("products/incoming_outgoing", () => getInAndOutcoming(id));
