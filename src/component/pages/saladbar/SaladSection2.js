import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  width: 100%;
  margin-bottom: 200px;
`;
const MainTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 100px;
  span {
    color: rgba(54, 226, 35, 1);
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
  line-height: 25px;
  opacity: 0.6;
`;
const Img = styled.img`
  transform: translateY(-50px);
`;

export const SaladSection2 = () => {
  return (
    <Section>
      <MainTitle>
        VIPS <span>ENJOY SALAD</span>
      </MainTitle>
      <ConWrap>
        <TextWrap>
          <Con>
            <Title>VIPS PREMIER</Title>
            <Text>
              원재료부터 조리방식, 서비스까지 모든 다이닝 경험을 차별화한 가장
              프리미엄한 빕스
            </Text>
          </Con>
          <Con>
            <Title>VIPS TASTE UP PLUS</Title>
            <Text>
              트렌디함과 전문성이 느껴지는 Steak & Salad Bar에 다채로운 맛과
              함께 특별한 다이닝 경험을 선사하는 빕스
            </Text>
          </Con>
        </TextWrap>
        <Img src="img/saladimg1.png" />
        <TextWrap>
          <Con>
            <Title>VIPS ORIGINAL</Title>
            <Text>
              정통 스테이크 & 시즌마다 새롭게 선보이는 샐러드바1997년부터
              사랑받아 온 My No.1 빕스
            </Text>
          </Con>
          <Con>
            <Title>VIPS YUM DELIVERY</Title>
            <Text>
              언제, 어디서든 빕스 시그니처 메뉴로 특별한 다이닝 경험을!
            </Text>
          </Con>
        </TextWrap>
      </ConWrap>
    </Section>
  );
};
