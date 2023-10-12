import { SaleStatus } from "../../../api/Products/api";
import GreenStatus from "../../../assets/svg/GreenStatus";
import OrangeStatus from "../../../assets/svg/OrangeStatus";
import RedStatus from "../../../assets/svg/RedStatus";

export const SaleStatusTransfor = (status: SaleStatus | string) => {
  switch (status) {
    case "SOLD_OUT":
      return {
        status: "품절",
        icon: <RedStatus />,
      };
    case "DISCONTINUED":
      return {
        status: "판매 중지",
        icon: <OrangeStatus />,
      };
    case "ON_SALE":
      return {
        status: "판매중",
        icon: <GreenStatus />,
      };
  }
};
