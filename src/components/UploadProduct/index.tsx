import {
  ButtonWrapper,
  CancelButton,
  Flex,
  SubmitButton,
  TitleFlex,
  UploadContainer,
  UploadInputContainer,
  Wrap,
} from "./style";
import Text from "../common/Text/Text";
import { ChangeEvent } from "react";
import TextInput from "../common/TextInput/TextInput";
import SmallInput from "../common/SmallInput";

const UploadProduct = () => {
  return (
    <UploadContainer
      onClick={(e: ChangeEvent<any>) => {
        e.stopPropagation();
      }}
    >
      <Wrap>
        <TitleFlex>
          <Text fontType="H2">재고 등록</Text>
          <Text fontType="p3" style={{ marginTop: "8px" }}>
            지원자의 원서와 증빙서류를 확인해주시기 바랍니다.
          </Text>
        </TitleFlex>
        <UploadInputContainer>
          <TextInput title="상품명" customStyle={{ width: "100%" }} />
          <Flex>
            <SmallInput title="총 재고량" />
            <SmallInput title="총 재고량" />
          </Flex>
          <Flex>
            <SmallInput title="입고 가격" />
            <SmallInput title="출고 가격" />
          </Flex>
        </UploadInputContainer>
        <ButtonWrapper>
          <CancelButton>취소</CancelButton>
          <SubmitButton>등록</SubmitButton>
        </ButtonWrapper>
      </Wrap>
    </UploadContainer>
  );
};

export default UploadProduct;
