import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  position: relative;
  overflow: hidden;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 100px;
  text-align: center;
`;
const Box = styled.div`
  width: 1400px;
  height: 400px;
  background-color: black;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 150px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 100;
  opacity: 0.6;
  margin-bottom: 30px;
`;
const Bg = styled.div`
  width: 1050px;
  height: 1050px;
  border-radius: 50%;
  background-color: ${mainstyle.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 100px;
  left: -500px;
  z-index: -1;
`;
const BgCover = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: #1d1d1d;
`;
export const ReSection3 = () => {
  return (
    <Section>
      <Title>VIPS 예약안내</Title>
      <Box>
        <Text>▷ 모든 메뉴 가격은 부가세 포함된 금액입니다.</Text>
        <Text>▷ 메뉴 가격에는 샐러드 바 1인 이용금액이 포함되어 있습니다.</Text>
        <Text>
          ▷ 매일매일 공급되는 신선한 재료를 사용하기에 메뉴 중 일부 또는
          가니쉬는 변경될 수 있습니다.
        </Text>
        <Text>
          ▷ 샐러드바 타입은 매장별 상이하며 샐러드바 메뉴에서 확인 할 수
          있습니다.
        </Text>
        <Text>
          ▷ 돌잔치 운영 방식등 세부사항은 매장별로 일부 상이할 수 있으므로,
          방문전 매장에 문의해 주세요
        </Text>
        <Text>
          ▷ 돌잔치 메뉴, 가격 및 혜택은 매장별로 일부 상이 할 수 있으므로, 방문
          전 매장에 문의해 주세요.
        </Text>
      </Box>
      <Bg>
        <BgCover />
      </Bg>
    </Section>
  );
};
