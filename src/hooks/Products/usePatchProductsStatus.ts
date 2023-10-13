import React, { useState } from "react";
import { useQueryClient } from "react-query";
import { usePatchProductStatusMutation } from "../../api/Products/mutation";
import { toast } from "react-toastify";

const usePatchProductsStatus = () => {
  const queryClient = useQueryClient();
  const mutation = usePatchProductStatusMutation();
  const [idList, setIdList] = useState<number[]>([]);
  const [statusList, setStatusList] = useState("");

  const onChangeIdList = (id: number) => {
    if (idList.includes(id)) {
      setIdList(idList.filter((item) => item !== id));
    } else {
      setIdList((prev) => [...prev, id]);
    }
  };

  const onChangeSaleStatusList = (status: string) => {
    setStatusList(status);
  };

  const onSubmitSaleStatus = (status: string) => {
    mutation.mutate(
      { productIds: idList, saleStatus: status },
      {
        onSuccess: () => {
          toast.success("재고 상태 수정");
          queryClient.invalidateQueries("products/getProducts");
          setIdList([]);
        },
      }
    );
  };

  return { onChangeIdList, idList, onChangeSaleStatusList, onSubmitSaleStatus };
};

export default usePatchProductsStatus;
