export interface GetProductResponse {
  aproducts: productItems[];
  bproducts: productItems[];
  cproducts: productItems[];
}

export interface productItems {
  productId: number;
  name: string;
  outgoingCount: number;
}

export interface GetProductDetailResponse {
  name: string;
  imageUrl: string;
  incomingPrice: number;
  outgoingPrice: number;
  count: number;
  safetyCount: number;
  normalCount: number;
  badCount: number;
}

export interface HistoryTableType {
  name: string;
  category: "incoming" | "outgoing";
  createdAt: string;
  beforeIncomingOutgoingCount: number;
  incomingOutgoingCount: number;
}

export interface GetInAndOutcomingResponse {
  incomingOutgoingProducts: HistoryTableType[];
}

export interface HistoryPropsType {
  data: HistoryTableType[];
}
