import React from "react";
import {
  CheckBoxTH,
  MiddleTH,
  Flex,
  BigBoxTH,
  WhiteBigBoxTH,
  WhiteMiddleTH,
  ButtonWrap,
  SmallButton,
} from "./style";
import CheckBox from "../../common/CheckBox";

const Product = () => {
  return (
    <>
      <ButtonWrap>
        <SmallButton>판매중지</SmallButton>
        <SmallButton>판매재개</SmallButton>
      </ButtonWrap>
      <div style={{ marginTop: "24px" }}>
        <Flex>
          <CheckBoxTH>
            <CheckBox />
          </CheckBoxTH>
          <MiddleTH>판매상태</MiddleTH>
          <BigBoxTH>출고상품명</BigBoxTH>
          <MiddleTH>총 재고</MiddleTH>
          <MiddleTH>안전 재고</MiddleTH>
          <MiddleTH>정상 재고</MiddleTH>
          <MiddleTH>분량 재고</MiddleTH>
          <MiddleTH>제조일자</MiddleTH>
        </Flex>
        {Array.from({ length: 6 }).map(() => (
          <Flex>
            <CheckBoxTH>
              <CheckBox />
            </CheckBoxTH>
            <WhiteMiddleTH>판매상태</WhiteMiddleTH>
            <WhiteBigBoxTH>출고상품명</WhiteBigBoxTH>
            <WhiteMiddleTH>총 재고</WhiteMiddleTH>
            <WhiteMiddleTH>안전 재고</WhiteMiddleTH>
            <WhiteMiddleTH>정상 재고</WhiteMiddleTH>
            <WhiteMiddleTH>분량 재고</WhiteMiddleTH>
            <WhiteMiddleTH>제조일자</WhiteMiddleTH>
          </Flex>
        ))}
      </div>
    </>
  );
};

export default Product;
