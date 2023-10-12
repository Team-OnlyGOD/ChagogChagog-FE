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
  return (
    <>
      <DemandFlex>
        {SELLING_TYPE.map((item) => (
          <DemandItemContainer>
            <DemandTitleFlex>
              <Text fontType="H4">{item}</Text>
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
                {Array.from({ length: 10 }).map(() => (
                  <DemandItemBox>
                    <Text fontType="p3">뭐시기뭐시</Text>
                    <Text fontType="p3">111회</Text>
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
