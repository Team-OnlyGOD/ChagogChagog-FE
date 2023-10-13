import * as SVG from "../../assets/svg";
import Text from "../common/Text/Text";
import { HistoryTable } from "../HistoryTable";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetInAndOutcoming,
  useGetProductDetail,
} from "../../api/Products/mutation";
import * as S from "./style";
import { DetailHistoryTable } from "../DetailTable";

export const DetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.id;
  const { data } = useGetProductDetail(productId ?? "");
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
        <S.DetailImg src={data?.imageUrl} />
        <S.DetailContent>
          <Text fontType="H2">{data?.name}</Text>
          <div>
            <Text fontType="p3">입고가: {data?.incomingPrice}원</Text>
            <Text fontType="p3">출고가: {data?.outgoingPrice}원</Text>
          </div>
          <S.DetailInfo>
            <S.DetailItem>
              <Text fontType="p3">총재고량</Text>
              <Text fontType="H3">{data?.count}</Text>
            </S.DetailItem>
            <S.DetailItem>
              <Text fontType="p3">안전 재고량</Text>
              <Text fontType="H3">{data?.safetyCount}</Text>
            </S.DetailItem>
            <S.DetailItem>
              <Text fontType="p3">정상 재고량</Text>
              <Text fontType="H3">{data?.normalCount}</Text>
            </S.DetailItem>
            <S.DetailItem>
              <Text fontType="p3">불량 재고량</Text>
              <Text fontType="H3">{data?.badCount}</Text>
            </S.DetailItem>
          </S.DetailInfo>
        </S.DetailContent>
      </S.DetailWrapper>
      {productId && <DetailHistoryTable id={productId} />}
    </S.DetailContainer>
  );
};
