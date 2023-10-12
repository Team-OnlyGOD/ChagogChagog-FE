import { HistoryTable } from "../HistoryTable";
import Text from "../common/Text/Text";
import * as S from "./style";

export const History = () => {
  return (
    <>
      <Text fontType="H1">입출고 내역</Text>
      <HistoryTable />
    </>
  );
};
