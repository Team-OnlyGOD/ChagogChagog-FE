import { InputHTMLAttributes } from "react";
import { CSSObject } from "styled-components";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder?: string;
  customStyle?: CSSObject;
}
