import React, { PropsWithChildren } from "react";
import { ModalBackground } from "./style";
import { ModalProps } from "./types";

export const Modal = ({
  onClose,
  children,
  isOpened,
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {isOpened && (
        <ModalBackground onClick={onClose}>{children}</ModalBackground>
      )}
    </>
  );
};
