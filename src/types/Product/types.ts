export interface GetProductResponse {
  aproducts: [
    {
      productId: number;
      name: string;
      outgoingCount: number;
    }
  ];
  bproducts: [
    {
      productId: number;
      name: string;
      outgoingCount: number;
    }
  ];
  cproducts: [
    {
      productId: number;
      name: string;
      outgoingCount: number;
    }
  ];
}
