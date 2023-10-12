import styled, { css } from "styled-components";
import { TableOptionType, TableProps } from "./types";
import font from "../../../style/font";

const Td = ({
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
    <StyledTd
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
    </StyledTd>
  );
};

export default Td;

const StyledTd = styled.div<{ option: TableOptionType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.Gray900};
  border: 0.5px solid ${({ theme }) => theme.Gray300};

  ${(props) =>
    props.option === "PRIMARY"
      ? css`
          ${font.context}
          background-color: #fff;
        `
      : css`
          ${font.p2}
          background-color:${({ theme }) => theme.Gray50};
        `}
`;
