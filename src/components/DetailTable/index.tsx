import { useGetInAndOutcoming } from "../../api/Products/mutation";
import Text from "../common/Text/Text";
import * as S from "./style";

interface Props {
  id: string;
}

export const DetailHistoryTable = ({ id }: Props) => {
  const { data } = useGetInAndOutcoming(id);
  console.log(data);

  const categoryColor = (response: "incoming" | "outgoing" | string) =>
    response === "incoming" ? "#3787FF" : "#F44336";
  return (
    <S.HistoryContainer>
      <S.HistoryWrapper>
        <S.HistoryTitle>
          <div>
            <Text fontType="p2">상품명</Text>
          </div>
          <div>
            <Text fontType="p2">입/출고 유형</Text>
            <Text fontType="p2">일시</Text>
            <Text fontType="p2">재고 변동</Text>
          </div>
        </S.HistoryTitle>

        {data?.incomingOutgoingProducts.map((item) => (
          <S.HistoryContent>
            <div>
              <Text fontType="p2">{item.name}</Text>
            </div>
            <div>
              <Text fontType="p2" color={categoryColor(item.category)}>
                {item.category === "incoming" ? "입고" : "출고"}
              </Text>
              <Text fontType="p2">{item.createdAt}</Text>
              <Text fontType="p2">
                {item.category === "incoming" && "+"}
                {item.beforeIncomingOutgoingCount -
                  item.incomingOutgoingCount}{" "}
                ({item.beforeIncomingOutgoingCount} {"->"}{" "}
                {item.incomingOutgoingCount})
              </Text>
            </div>
          </S.HistoryContent>
        ))}
      </S.HistoryWrapper>
    </S.HistoryContainer>
  );
};
