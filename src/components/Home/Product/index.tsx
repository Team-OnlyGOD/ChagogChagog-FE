import React, { ChangeEvent } from "react";
import {
  CheckBoxTH,
  MiddleTH,
  Flex,
  BigBoxTH,
  WhiteBigBoxTH,
  WhiteMiddleTH,
  ButtonWrap,
  SmallButton,
  TopWrap,
  TableContainer,
} from "./style";
import CheckBox from "../../common/CheckBox";
import { ReactComponent as Green } from "../../../assets/svg/green.svg";
import { ReactComponent as Red } from "../../../assets/svg/red.svg";
import { ReactComponent as Orange } from "../../../assets/svg/orange.svg";
import ExportIcon from "../../../assets/Icon/ExportIcon";
<<<<<<< Updated upstream
=======
import useModal from "../../../hooks/useModal";
import UploadProduct from "../../UploadProduct";
import { Modal } from "../../common/Modal";
 import { ModalBackground } from "../../common/Modal/style";
>>>>>>> Stashed changes

const Product = () => {
  const response = "DISCONTINUED";

  const getStatusColor = (response: string) => {
    switch (response) {
      case "ON_SALE":
        return <Green />;

      case "DISCONTINUED":
        return <Orange />;

      case "SOLD_OUT":
        return <Red />;
    }
  };

  const stopBubbling = (event: React.ChangeEvent<any>) => {
    event.stopPropagation();
  };

  const { close, isOpen, open } = useModal();

  return (
    <>
      <TopWrap>
        <ButtonWrap>
          <SmallButton>판매중지</SmallButton>
          <SmallButton>판매재개</SmallButton>
        </ButtonWrap>
        <ButtonWrap>
          <SmallButton onClick={open}>재고 등록</SmallButton>
          <SmallButton>
            <ExportIcon />
          </SmallButton>
        </ButtonWrap>
      </TopWrap>
      <TableContainer>
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
            <WhiteMiddleTH>{getStatusColor(response)} 판매중</WhiteMiddleTH>
            <WhiteBigBoxTH>출고상품명</WhiteBigBoxTH>
            <WhiteMiddleTH>총 재고</WhiteMiddleTH>
            <WhiteMiddleTH>안전 재고</WhiteMiddleTH>
            <WhiteMiddleTH>정상 재고</WhiteMiddleTH>
            <WhiteMiddleTH>분량 재고</WhiteMiddleTH>
            <WhiteMiddleTH>제조일자</WhiteMiddleTH>
          </Flex>
        ))}
      </TableContainer>
      <Modal isOpened={isOpen} onClose={close}>
        <UploadProduct />
      </Modal>
    </>
  );
};

export default Product;
