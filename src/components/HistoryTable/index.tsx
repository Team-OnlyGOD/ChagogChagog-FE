import Text from "../common/Text/Text";
import * as S from "./style";

export const HistoryTable = () => {
  let response = "outcoming";
  const categoryColor = response === "incoming" ? "#3787FF" : "#F44336";

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
        {Array.from({ length: 5 }).map(() => (
          <S.HistoryContent>
            <div>
              <Text fontType="p2">New Balance 530 White</Text>
            </div>
            <div>
              <Text fontType="p2" color={categoryColor}>
                입고
              </Text>
              <Text fontType="p2">2023.11.03</Text>
              <Text fontType="p2">-2 (10 {"->"} 8)</Text>
            </div>
          </S.HistoryContent>
        ))}
      </S.HistoryWrapper>
    </S.HistoryContainer>
  );
};
