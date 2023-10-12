import {
  ButtonWrapper,
  CancelButton,
  Flex,
  ImageBox,
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
import useCreateProducts from "../../hooks/Products/useCreateProducts";

const UploadProduct = () => {
  const {
    fileName,
    onChangeImage,
    onChangeUploadData,
    onSubmitUploadData,
    uploadData,
  } = useCreateProducts();
  return (
    <UploadContainer
      onSubmit={onSubmitUploadData}
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
          <Flex>
            <input
              type="file"
              id="fileupload"
              name="imageUrl"
              onChange={onChangeImage}
            />
            <ImageBox htmlFor="fileupload">상품 이미지 업로드</ImageBox>
            <p>{fileName?.name}</p>
          </Flex>
          <TextInput
            title="상품명"
            name="name"
            value={uploadData.name}
            onChange={onChangeUploadData}
            customStyle={{ width: "100%" }}
          />
          <Flex>
            <SmallInput
              title="총 재고량"
              name="count"
              value={uploadData.count}
              onChange={onChangeUploadData}
            />
            <SmallInput
              title="안전 재고량"
              name="safetyCount"
              value={uploadData.safetyCount}
              onChange={onChangeUploadData}
            />
          </Flex>
          <Flex>
            <SmallInput
              title="입고 가격"
              name="incomingPrice"
              value={uploadData.incomingPrice}
              onChange={onChangeUploadData}
            />
            <SmallInput
              title="출고 가격"
              name="outgoingPrice"
              value={uploadData.outgoingPrice}
              onChange={onChangeUploadData}
            />
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
