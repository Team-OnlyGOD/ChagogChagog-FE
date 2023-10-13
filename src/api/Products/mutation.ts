import { useMutation, useQuery } from "react-query";
import {
  createProducts,
  getInAndOutcoming,
  getProductABC,
  getProductDetail,
  getProductHistory,
  getProducts,
  patchProductByABC,
  patchProductStatus,
} from "./api";

export const useCreateProductsMutation = () => {
  const mutation = useMutation(createProducts);
  return mutation;
};

export const useGetAllProductsQuery = () =>
  useQuery("products/getProducts", () => getProducts());

export const usePatchProductStatusMutation = () => {
  const mutation = useMutation(patchProductStatus);
  return mutation;
};

export const usePatchProdcutByABC = () => {
  const mutation = useMutation(patchProductByABC);
  return mutation;
};

export const useGetProductABCQuery = () =>
  useQuery("products/getProductsAbcType", () => getProductABC());

export const useGetProductDetail = (id: string) =>
  useQuery("products/getProductDetail", () => getProductDetail(id));

export const useGetInAndOutcoming = (id: string) =>
  useQuery("products/incoming_outgoing", () => getInAndOutcoming(id));

export const useGetProductHistory = () =>
  useQuery("products/productsHistory", () => getProductHistory());
