import styled from "styled-components";

export const DemandItemContainer = styled.div`
  display: flex;
  width: 347px;
  height: 500px;

  overflow: auto;
  flex-direction: column;

  overflow: auto;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.Gray200};
  padding: 24px 12px 0px 12px;
`;

export const DemandFlex = styled.div`
  display: flex;

  width: 100%;

  column-gap: 30px;

  margin-top: 24px;
`;

export const DemandTitleFlex = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const DemandItemBox = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px 0 16px;

  border-radius: 12px;
  background: ${({ theme }) => theme.Gray50};
`;

export const DemandItemWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  row-gap: 12px;
`;
