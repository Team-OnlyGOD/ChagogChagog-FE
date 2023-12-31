import { useState } from "react";
import useTokenCheck from "../../hooks/Auth/useTokenCheck";
import NavButton from "../common/NavButton";
import Text from "../common/Text/Text";
import { Flex, HomeSwitchContainer, ReloadButton, ReloadText } from "./style";
import Product from "./Product";
import Demand from "./Demand";
import ReloadIcon from "../../assets/Icon/ReloadIcon";
import { patchProductByABC } from "../../api/Products/api";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

type Section = "product" | "demand";

const Home = () => {
  useTokenCheck();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
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
            주문량별
          </NavButton>
        </Flex>
        <ReloadButton>
          <ReloadIcon />
          <ReloadText
            onClick={() => {
              patchProductByABC();
              setSection("demand");
              queryClient.invalidateQueries("products/getProductsAbcType");
            }}
          >
            새로고침
          </ReloadText>
        </ReloadButton>
      </HomeSwitchContainer>
      {section === "product" ? <Product /> : <Demand />}
    </>
  );
};

export default Home;
