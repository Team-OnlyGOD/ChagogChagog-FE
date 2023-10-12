interface SellingType {
  label: string;
  value: "aproducts" | "bproducts" | "cproducts";
}

export const SELLING_TYPE: SellingType[] = [
  { label: "주문이 가장 많은 상품", value: "aproducts" },
  { label: "지속적인 주문이 있는 상품", value: "bproducts" },
  { label: "주문이 가장 적은 상품", value: "cproducts" },
];
