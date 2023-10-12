import { useState } from "react";
import useTokenCheck from "../../hooks/Auth/useTokenCheck";
import NavButton from "../common/NavButton";
import Text from "../common/Text/Text";
import { Flex, HomeSwitchContainer } from "./style";
import Product from "./Product";
import Demand from "./Demand";

type Section = "product" | "demand";

const Home = () => {
  useTokenCheck();
  const [section, setSection] = useState<Section>("product");
  return (
    <>
      <Text fontType="H1">재고현황</Text>
      <HomeSwitchContainer>
        <Flex>
          <NavButton
            onClick={() => setSection("product")}
            isChecked={section === "product" ? true : false}
          >
            상품별
          </NavButton>
          <NavButton
            onClick={() => setSection("demand")}
            isChecked={section === "demand" ? true : false}
          >
            수요량별
          </NavButton>
        </Flex>
      </HomeSwitchContainer>
      {section === "product" ? <Product /> : <Demand />}
    </>
  );
};

export default Home;
