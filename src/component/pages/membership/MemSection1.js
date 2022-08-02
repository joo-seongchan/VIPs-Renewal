import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.section`
  width: 100%;
  padding: 0 220px;
  min-width: 1500px;
  margin-bottom: 250px;
  position: relative;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;
const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  text-align: center;
  margin-bottom: 80px;
`;
const ConWrap = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.div`
  width: 500px;
  height: 100%;
  border-radius: 25px;
  background: url(img/memimg4.png) no-repeat center/cover;
`;
const Cons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
const Con = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
`;
const Icon = styled.img``;
const Name = styled.div`
  margin: 20px 0 15px 0;
  font-size: 18px;
  font-weight: 400;
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 100;
  opacity: 0.8;
  line-height: 20px;
`;
const SecondLine = styled.div`
  display: flex;
  justify-content: center;
`;

const Bg = styled.div`
  width: 1050px;
  height: 1050px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${mainstyle.mainColor};
  border-radius: 50%;
  position: absolute;
  bottom: -600px;
  right: -600px;
  z-index: -1;
`;

const BgCover = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #1d1d1d;
`;

export const MemSection1 = () => {
  return (
    <Section>
      <Title>CJ ONE</Title>
      <Subtitle>CJ의 통합 멤버십 서비스를 한장의 카드로!</Subtitle>
      <ConWrap>
        <Img />
        <Cons>
          <FirstLine>
            <Con>
              <Icon src="img/memicon1.png"></Icon>
              <Name>생일 축하 쿠폰</Name>
              <Text>
                설정된 생일 정보를 확인하세요! 1년 1회, 1만원 할인 쿠폰 증정
              </Text>
            </Con>
            <Con>
              <Icon src="img/memicon2.png"></Icon>
              <Name>포인트 적립</Name>
              <Text>CJ ONE 포인트 0.5% 작립 제휴 및 할인 시 0.5% 적립</Text>
            </Con>
          </FirstLine>
          <SecondLine>
            <Con>
              <Icon src="img/memicon3.png"></Icon>
              <Name>포인트 사용</Name>
              <Text>1,000포인트 이상 보유 시, 10포인트 단위 현금처럼 사용</Text>
            </Con>
            <Con>
              <Icon src="img/memicon4.png"></Icon>
              <Name>보너스포인트 추가</Name>
              <Text>
                매월 CJ ONE 제휴 브랜드 4개 이용시 50%5개 이용시 100% 추가
                포인트 적립
              </Text>
            </Con>
            <Con>
              <Icon src="img/memicon5.png"></Icon>
              <Name>포인트 선물하기</Name>
              <Text>가족, 친구에게 포인트 선물하고 행복을 나누세요</Text>
            </Con>
          </SecondLine>
        </Cons>
      </ConWrap>
      <Bg>
        <BgCover></BgCover>
      </Bg>
    </Section>
  );
};
