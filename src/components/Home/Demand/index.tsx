import { SELLING_TYPE } from "./constant";
import {
  DemandFlex,
  DemandItemBox,
  DemandItemContainer,
  DemandItemWrap,
  DemandTitleFlex,
} from "./style";
import Text from "../../common/Text/Text";
import HelpIcon from "../../../assets/Icon/HelpIcon";
import { useGetProductABCQuery } from "../../../api/Product/queies";

export type DayType = "year" | "month";

const Demand = () => {
  const { data } = useGetProductABCQuery();

  return (
    <>
      <DemandFlex>
        <DemandItemContainer>
          <DemandTitleFlex>
            <Text fontType="H4">주문이 가장 많은 상품</Text>
            <HelpIcon />
          </DemandTitleFlex>
          {data?.aproducts.map((data) => (
            <DemandItemBox>
              <Text fontType="p3">{data.name}</Text>
              <Text fontType="p3">{`${data.outgoingCount}회`}</Text>
            </DemandItemBox>
          ))}
        </DemandItemContainer>
        <DemandItemContainer>
          <DemandTitleFlex>
            <Text fontType="H4">지속적인 주문이 많은 상품</Text>
            <HelpIcon />
          </DemandTitleFlex>
          {data?.bproducts.map((data) => (
            <DemandItemBox>
              <Text fontType="p3">{data.name}</Text>
              <Text fontType="p3">{`${data.outgoingCount}회`}</Text>
            </DemandItemBox>
          ))}
        </DemandItemContainer>
        <DemandItemContainer>
          <DemandTitleFlex>
            <Text fontType="H4">주문이 가장 적은 상품</Text>
            <HelpIcon />
          </DemandTitleFlex>
          {data?.cproducts.map((data) => (
            <DemandItemBox>
              <Text fontType="p3">{data.name}</Text>
              <Text fontType="p3">{`${data.outgoingCount}회`}</Text>
            </DemandItemBox>
          ))}
        </DemandItemContainer>
      </DemandFlex>
    </>
  );
};

export default Demand;
