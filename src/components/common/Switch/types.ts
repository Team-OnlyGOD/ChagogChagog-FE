import React from "react";
import { CSSObject } from "styled-components";

export interface SwitchWrapperProps {
  children: React.ReactNode;
  customStyle?: CSSObject;
}

export interface SwitchButtonProps {
  children: string;
  isClicked: boolean;
  onClick: () => void;
}
