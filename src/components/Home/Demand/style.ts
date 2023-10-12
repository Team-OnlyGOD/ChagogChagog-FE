import styled from "styled-components";

export const DemandItemBox = styled.div`
  display: flex;
  width: 347px;
  height: 500px;

  overflow: auto;
  padding: 24px 12px 12px 12px;
  flex-direction: column;

  border-radius: 24px;
  border: 1px solid var(--gray-scale-gray-200, #eef0f2);
`;

export const DemandFlex = styled.div`
  display: flex;

  width: 100%;

  column-gap: 30px;
`;
