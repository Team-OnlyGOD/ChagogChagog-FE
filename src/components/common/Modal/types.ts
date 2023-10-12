import { MouseEventHandler } from "react";

export interface ModalProps {
  isOpened: boolean;
  onClose: MouseEventHandler<any>;
}
