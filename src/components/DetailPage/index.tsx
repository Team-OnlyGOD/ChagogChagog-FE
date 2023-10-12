import * as S from "./style";
import * as SVG from "../../assets/svg";
import Text from "../common/Text/Text";
import testImg from "../../assets/png/testImg.jpeg";
import { HistoryTable } from "../HistoryTable";
import { useNavigate } from "react-router-dom";

export const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <S.DetailContainer>
      <span
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", width: "max-content" }}
      >
        <SVG.Arrow />
        <Text fontType="p2">뒤로 가기</Text>
      </span>
      <S.DetailWrapper>
        <S.DetailImg src={testImg} />
        <S.DetailContent>
          <Text fontType="H2">New Balance 530 White</Text>
          <div>
            <Text fontType="p3">입고가: 111,000원</Text>
            <Text fontType="p3">출고가: 111,000원</Text>
          </div>
          <S.DetailInfo>
            <S.DetailItem>
              <Text fontType="p3">총재고량</Text>
              <Text fontType="H3">100</Text>
            </S.DetailItem>
            <S.DetailItem>
              <Text fontType="p3">안전 재고량</Text>
              <Text fontType="H3">7</Text>
            </S.DetailItem>
            <S.DetailItem>
              <Text fontType="p3">정상 재고량</Text>
              <Text fontType="H3">4</Text>
            </S.DetailItem>
            <S.DetailItem>
              <Text fontType="p3">불량 재고량</Text>
              <Text fontType="H3">10</Text>
            </S.DetailItem>
          </S.DetailInfo>
        </S.DetailContent>
      </S.DetailWrapper>
      <HistoryTable />
    </S.DetailContainer>
  );
};
