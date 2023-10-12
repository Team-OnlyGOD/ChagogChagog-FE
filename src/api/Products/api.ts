import { customAxios } from "../../libs/Axios/customAxios";

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
