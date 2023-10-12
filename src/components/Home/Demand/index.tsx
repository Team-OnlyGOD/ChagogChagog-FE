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

export type DayType = "year" | "month";

const Demand = () => {
  const [section, setSection] = useState<DayType>("year");
  return (
    <>
      <SwitchWrap customStyle={{ marginTop: "24px" }}>
        <Switch
          onClick={() => setSection("year")}
          isClicked={section === "year" ? true : false}
        >
          연간
        </Switch>
        <Switch
          onClick={() => setSection("month")}
          isClicked={section === "month" ? true : false}
        >
          월간
        </Switch>
      </SwitchWrap>

      <DemandFlex>
        {SELLING_TYPE.map((item) => (
          <DemandItemContainer>
            <DemandTitleFlex>
              <Text fontType="H4">{item}</Text>
              <HelpIcon />
            </DemandTitleFlex>

            <DemandItemWrap>
              {Array.from({ length: 10 }).map(() => (
                <DemandItemBox>하이</DemandItemBox>
              ))}
            </DemandItemWrap>
          </DemandItemContainer>
        ))}
      </DemandFlex>
    </>
  );
};

export default Demand;
