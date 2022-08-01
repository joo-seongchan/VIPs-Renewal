import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  width: 100%;
`;
const MainTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 100px;
  span {
    color: ${mainstyle.mainColor};
  }
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextWrap = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:last-child {
    align-items: flex-end;
  }
`;
const Con = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.6;
`;
const Img = styled.img``;

export const SteakSection2 = () => {
  return (
    <Section>
      <MainTitle>
        VIPS <span>ENJOY STEAK</span>
      </MainTitle>
      <ConWrap>
        <TextWrap>
          <Con>
            <Title>다양한 조리방식</Title>
            <Text>
              브로일링은 물론 팬 프라잉 및 얌 스톤까지 다양한 조리방식으로
              즐기실 수 있습니다
            </Text>
          </Con>
          <Con>
            <Title>엄선된 쇠고기</Title>
            <Text>풍부한 육즙과 우수한 마블링을 경험하실 수 있습니다</Text>
          </Con>
        </TextWrap>
        <Img src="img/steakimg2.png" />
        <TextWrap>
          <Con>
            <Title>쉐프가 직접 구워</Title>
            <Text>바로 준비해드리기 때문에 풍미가 더욱 좋습니다. </Text>
          </Con>
          <Con>
            <Title>차별화 된 스테이크</Title>
            <Text>
              플람베 스테이크 등 차별화된 스테이크를 맛 보실 수 있습니다.
            </Text>
          </Con>
        </TextWrap>
      </ConWrap>
    </Section>
  );
};
