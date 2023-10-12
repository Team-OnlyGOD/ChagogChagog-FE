import { InputHTMLAttributes } from "react";

export interface SmallInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder?: string;
}
