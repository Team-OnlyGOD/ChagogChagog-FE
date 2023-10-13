import {
  DemandFlex,
  DemandItemBox,
  DemandItemContainer,
  DemandItemWrap,
  DemandTitleFlex,
} from "./style";
import Text from "../../common/Text/Text";
import HelpIcon from "../../../assets/Icon/HelpIcon";
import { useGetProductABCQuery } from "../../../api/Products/mutation";
import { useNavigate } from "react-router-dom";

export type DayType = "year" | "month";

const Demand = () => {
  const { data } = useGetProductABCQuery();
  const navigate = useNavigate();
  return (
    <>
      <DemandFlex>
        <DemandItemContainer>
          <DemandTitleFlex>
            <Text fontType="H4">주문이 가장 많은 상품</Text>
            <HelpIcon />
          </DemandTitleFlex>
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              marginTop: "20px",
            }}
          >
            <DemandItemWrap>
              {data?.aproducts.map((data) => (
                <DemandItemBox
                  onClick={() => navigate(`/detail/${data.productId}`)}
                >
                  <Text fontType="p3">{data.name}</Text>
                  <Text fontType="p3">{`${data.outgoingCount}회`}</Text>
                </DemandItemBox>
              ))}
            </DemandItemWrap>
          </div>
        </DemandItemContainer>
        <DemandItemContainer>
          <DemandTitleFlex>
            <Text fontType="H4">지속적인 주문이 많은 상품</Text>
            <HelpIcon />
          </DemandTitleFlex>
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              marginTop: "20px",
            }}
          >
            <DemandItemWrap>
              {data?.bproducts.map((data) => (
                <DemandItemBox
                  onClick={() => navigate(`/detail/${data.productId}`)}
                >
                  <Text fontType="p3">{data.name}</Text>
                  <Text fontType="p3">{`${data.outgoingCount}회`}</Text>
                </DemandItemBox>
              ))}
            </DemandItemWrap>
          </div>
        </DemandItemContainer>
        <DemandItemContainer>
          <DemandTitleFlex>
            <Text fontType="H4">주문이 가장 적은 상품</Text>
            <HelpIcon />
          </DemandTitleFlex>
          <div
            style={{
              width: "100%",
              height: "100%",
              overflow: "auto",
              marginTop: "20px",
            }}
          >
            <DemandItemWrap>
              {data?.cproducts.map((data) => (
                <DemandItemBox
                  onClick={() => navigate(`/detail/${data.productId}`)}
                >
                  <Text fontType="p3">{data.name}</Text>
                  <Text fontType="p3">{`${data.outgoingCount}회`}</Text>
                </DemandItemBox>
              ))}
            </DemandItemWrap>
          </div>
        </DemandItemContainer>
      </DemandFlex>
    </>
  );
};

export default Demand;
