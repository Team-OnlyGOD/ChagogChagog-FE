import { customAxios } from "../../libs/Axios/customAxios";
import {
  GetInAndOutcomingResponse,
  GetProductDetailResponse,
  GetProductResponse,
} from "../../types/Product/types";

export const getProductABC = async () => {
  const { data } = await customAxios.get<GetProductResponse>(
    "/products/abc_type"
  );
  return data;
};

export const getProductDetail = async (id: string) => {
  const { data } = await customAxios.get<GetProductDetailResponse>(
    `/products/${id}`
  );
  return data;
};

export const getInAndOutcoming = async (id: string) => {
  const { data } = await customAxios.get<GetInAndOutcomingResponse>(
    `/products/incoming_outgoing/?product_id=${id}`
  );
  return data;
};

export const createProducts = async (param: CreateProductsParam) => {
  const { data } = await customAxios.post("/products/new", param);
  return data;
};

export const getProducts = async () => {
  const { data } = await customAxios.get<ProductResponse>("/products");
  return data;
};

export const patchProductStatus = async () => {
  await customAxios.patch("/products/sale_status");
};

export const createIncomingProduct = async (id: number) => {
  await customAxios.post(`/products/incoming/${id}`);
};

export const patchProductByABC = async () => {
  await customAxios.patch("/products/abc_type");
};

export interface CreateProductsParam {
  name: string;
  count: number;
  safetyCount: number;
  incomingPrice: number;
  outgoingPrice: number;
  imageUrl: string;
}

export type SaleStatus = "ON_SALE" | "DISCONTINUED" | "SOLD_OUT";

export interface Product {
  productId: number;
  saleStatus: SaleStatus | string;
  name: string;
  count: number;
  safetyCount: number;
  normalCount: number;
  badCount: number;
  createdAt: string;
}

export interface ProductResponse {
  products: Product[];
}

export interface PatchProductStatusParam {
  saleStatus: SaleStatus | string;
  productIds: number[];
}
