import font from "../../../style/font";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type Font = keyof typeof font;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties["color"];
  fontType: Font;
  width?: CSSProperties["width"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  whiteSpace?: CSSProperties["whiteSpace"];
}

const Text = ({
  children,
  color,
  fontType,
  textAlign,
  width,
  ellipsis = false,
  whiteSpace = "nowrap",
  style,
}: Props) => {
  return (
    <StyledText
      style={{ color, textAlign, width, whiteSpace, ...style }}
      fontType={fontType}
      ellipsis={ellipsis}
    >
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => font[fontType]}
  ${(props) =>
    props.ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
