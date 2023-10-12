import React from "react";
import { SwitchButton, SwitchWrapper } from "./style";
import { SwitchButtonProps, SwitchWrapperProps } from "./types";

export const SwitchWrap = ({ children, customStyle }: SwitchWrapperProps) => {
  return <SwitchWrapper customStyle={customStyle}>{children}</SwitchWrapper>;
};

export const Switch = ({ children, isClicked, onClick }: SwitchButtonProps) => {
  return (
    <SwitchButton onClick={onClick} isClicked={isClicked}>
      {children}
    </SwitchButton>
  );
};
