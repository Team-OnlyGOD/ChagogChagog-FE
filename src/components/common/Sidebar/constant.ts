import * as SVG from "../../../assets/svg";

export const SIDEBAR_ITEMS = [
  {
    path: "/",
    name: "재고 현황",
    icon: SVG.BoxIcon,
    background: "rgba(55, 135, 255, 0.10);",
    border: "#3787FF",
  },
  {
    path: "/history",
    name: "입출고 내역",
    icon: SVG.HistoryIcon,
    background: "rgba(37, 206, 132, 0.10)",
    border: "#25CE84",
  },
  {
    path: "/notice",
    name: "알림",
    icon: SVG.NotificationIcon,
    background: "rgba(255, 106, 194, 0.10)",
    border: "#FF6AC2",
  },
];
