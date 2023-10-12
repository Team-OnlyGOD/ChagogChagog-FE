import SoldOutIcon from "../../assets/Icon/SoldOutIcon";
import SuccessIcon from "../../assets/Icon/SuccessIcon";
import WarningIcon from "../../assets/Icon/WarningIcon";

export const NoticeData = [
  {
    status: "품절 임박",
    icon: SoldOutIcon,
    data: "New Balance 530 White의 품절이 임박했어요.발주를 넣어 재고를 확보하세요.",
  },
  {
    status: "발주일 임박",
    icon: WarningIcon,
    data: "New Balance 530 White의 발주일이 임박했어요. 발주를 넣어 재고를 확보하세요.",
  },
  {
    status: "발주 완료",
    icon: SuccessIcon,
    data: "New Balance 530 White의 발주가 완료되었습니다.",
  },
];
