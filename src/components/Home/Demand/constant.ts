interface SellingType {
  label: string;
  value: "a" | "b" | "c";
}

export const SELLING_TYPE: SellingType[] = [
  { label: "주문이 가장 많은 상품", value: "a" },
  { label: "지속적인 주문이 있는 상품", value: "b" },
  { label: "주문이 가장 적은 상품", value: "c" },
];
