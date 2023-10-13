import React, { useState } from "react";
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
  UnCheckBox,
} from "./style";
import CheckBox from "../../common/CheckBox";
import ExportIcon from "../../../assets/Icon/ExportIcon";
import { Modal } from "../../common/Modal";
import UploadProduct from "../../UploadProduct";
import useModal from "../../../hooks/useModal";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../api/Products/mutation";
import { SaleStatusTransfor } from "./util";
import usePatchProductsStatus from "../../../hooks/Products/usePatchProductsStatus";
import CheckIcon from "../../../assets/Icon/CheckIcon";

const Product = () => {
  const navigate = useNavigate();
  const { close, isOpen, open } = useModal();
  const { onChangeIdList, onChangeSaleStatusList, onSubmitSaleStatus, idList } =
    usePatchProductsStatus();
  const { data } = useGetAllProductsQuery();
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <TopWrap>
        <ButtonWrap>
          <SmallButton
            onClick={() => {
              onSubmitSaleStatus("DISCONTINUED");
            }}
          >
            판매중지
          </SmallButton>
          <SmallButton
            onClick={() => {
              onSubmitSaleStatus("ON_SALE");
            }}
          >
            판매재개
          </SmallButton>
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
            <UnCheckBox />
          </CheckBoxTH>
          <MiddleTH>판매상태</MiddleTH>
          <BigBoxTH>출고상품명</BigBoxTH>
          <MiddleTH>총 재고</MiddleTH>
          <MiddleTH>안전 재고</MiddleTH>
          <MiddleTH>정상 재고</MiddleTH>
          <MiddleTH>분량 재고</MiddleTH>
          <MiddleTH>제조일자</MiddleTH>
        </Flex>
        {data?.products.map((data) => {
          return (
            <>
              <Flex>
                <CheckBoxTH>
                  {idList.includes(data.productId) ? (
                    <CheckIcon onClick={() => onChangeIdList(data.productId)} />
                  ) : (
                    <UnCheckBox
                      onClick={() => onChangeIdList(data.productId)}
                    />
                  )}
                </CheckBoxTH>
                <WhiteMiddleTH>
                  {SaleStatusTransfor(data.saleStatus)?.icon}
                  {SaleStatusTransfor(data.saleStatus)?.status}
                </WhiteMiddleTH>
                <WhiteBigBoxTH
                  onClick={() => navigate(`/detail/${data.productId}`)}
                  style={{ cursor: "pointer" }}
                >
                  {data.name}
                </WhiteBigBoxTH>
                <WhiteMiddleTH>{data.count}</WhiteMiddleTH>
                <WhiteMiddleTH>{data.safetyCount}</WhiteMiddleTH>
                <WhiteMiddleTH>{data.normalCount}</WhiteMiddleTH>
                <WhiteMiddleTH>{data.badCount}</WhiteMiddleTH>
                <WhiteMiddleTH>{data.createdAt}</WhiteMiddleTH>
              </Flex>
            </>
          );
        })}
      </TableContainer>
      <Modal isOpened={isOpen} onClose={close}>
        <UploadProduct close={close} />
      </Modal>
    </>
  );
};

export default Product;
