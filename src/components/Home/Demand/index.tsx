import { useState } from "react";
import { Switch, SwitchWrap } from "../../common/Switch/Switch";
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

  if (!data) return <div />;
  return (
    <>
      <DemandFlex>
        {SELLING_TYPE.map((item) => (
          <DemandItemContainer>
            <DemandTitleFlex>
              <Text fontType="H4">{item.label}</Text>
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
                {data[`${item.value}products`].map((item, index) => (
                  <DemandItemBox key={index}>
                    <Text fontType="p3">{item.name}</Text>
                    <Text fontType="p3">{item.outgoingCount}회</Text>
                  </DemandItemBox>
                ))}
              </DemandItemWrap>
            </div>
          </DemandItemContainer>
        ))}
      </DemandFlex>
    </>
  );
};

export default Demand;
