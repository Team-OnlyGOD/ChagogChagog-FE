import styled, { css } from "styled-components";
import { TableOptionType, TableProps } from "./types";
import font from "../../../style/font";

const Th = ({
  children,
  width,
  height,
  option = "PRIMARY",
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
}: TableProps) => {
  return (
    <StyledTh
      style={{
        width,
        height,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
      }}
      option={option}
    >
      {children}
    </StyledTh>
  );
};

export default Th;

const StyledTh = styled.div<{ option: TableOptionType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.option === "PRIMARY"
      ? css`
          ${font.context}
          background-color:${({ theme }) => theme.Gray100};
          color: #fff;
          border-right: 1px solid #fff;
          &:last-child {
            border-right: none;
          }
        `
      : css`
          ${font.p2}
          background-color: ${({ theme }) => theme.Gray100};
          color: ${({ theme }) => theme.Gray900};
          border-left: 1px solid ${({ theme }) => theme.Gray300};
          &:first-child {
            border-left: none;
          }
        `}
`;
