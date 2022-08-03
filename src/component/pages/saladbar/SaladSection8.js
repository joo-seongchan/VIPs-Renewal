import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  margin-bottom: 200px;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 35px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  opacity: 0.8;
  line-height: 25px;
  margin-bottom: 100px;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Con = styled.div`
  position: relative;
  margin-right: 300px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    img {
      transform: translateX(50px);
    }
    h1 {
      background-color: rgba(0, 0, 0, 0.3);
      color: ${mainstyle.mainColor};
    }
  }
`;
const Arrow = styled.img`
  position: absolute;
  bottom: 50px;
  left: -130px;
  transition: 0.5s;
`;
const Circle = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background-color: black;
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  line-height: 70px;
`;
const CircleCover = styled.h1`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  transition: 0.5s;
`;

export const SaladSection8 = () => {
  return (
    <Section>
      <Title>픽업 & 딜리버리 메뉴</Title>
      <SubTitle>
        샐러드부터 스테이크까지 고급스러운 한 끼 식사
        <br />
        VIPS 픽업 & 딜리버리를 집에서 특별하게 즐기세요!
      </SubTitle>
      <ConWrap>
        <Con>
          <Arrow src="img/saladarrow.png"></Arrow>
          <Circle
            style={{
              background: "url(img/saladimg17.png) no-repeat center/cover",
            }}
          >
            <CircleCover>
              빕스 얌 Delivery
              <br /> 주문하기
            </CircleCover>
          </Circle>
        </Con>
        <Con>
          <Arrow src="img/saladarrow.png"></Arrow>
          <Circle
            style={{
              background: "url(img/saladimg18.png) no-repeat center/cover",
            }}
          >
            <CircleCover>
              빕스 레스토랑 MealKit
              <br />
              바로가기
            </CircleCover>
          </Circle>
        </Con>
      </ConWrap>
    </Section>
  );
};
