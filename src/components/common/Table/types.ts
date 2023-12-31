import { CSSProperties, ReactNode } from "react";

export interface TableProps {
  children: ReactNode;
  width: CSSProperties["width"];
  height: CSSProperties["height"];
  option?: TableOptionType;
  borderTopLeftRadius?: CSSProperties["borderTopLeftRadius"];
  borderTopRightRadius?: CSSProperties["borderTopRightRadius"];
  borderBottomLeftRadius?: CSSProperties["borderBottomLeftRadius"];
  borderBottomRightRadius?: CSSProperties["borderBottomRightRadius"];
}

export type TableOptionType = "PRIMARY" | "SECONDARY";
