import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  padding: 0 180px 0 180px;
  position: relative;
  margin-bottom: 150px;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 150px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 100px;
`;
const ConWrap = styled.div`
  display: flex;
`;
const Img = styled.img`
  margin-right: 100px;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 75px;
  line-height: 35px;
  span {
    font-size: 20px;
    font-weight: 100;
    opacity: 0.8;
  }
  &:first-child {
    font-size: 40px;
    font-weight: 500;
    color: ${mainstyle.mainColor};
  }
`;
const Bg1 = styled.div`
  width: 1050px;
  height: 1050px;
  border-radius: 50%;
  background-color: ${mainstyle.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -500px;
  left: -500px;
  z-index: -1;
`;
const Bg2 = styled.div`
  width: 525px;
  height: 1050px;
  border-top-left-radius: 525px;
  border-bottom-left-radius: 525px;
  background-color: ${mainstyle.mainColor};
  position: absolute;
  bottom: -500px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  z-index: -1;
`;
const BgCover = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 100%;
  background-color: #1d1d1d;
`;
const BgCover2 = styled.div`
  width: 50%;
  height: 50%;
  border-top-left-radius: 525px;
  border-bottom-left-radius: 525px;
  background-color: #1d1d1d;
`;

export const ReSection2 = () => {
  return (
    <Section>
      <Title>VIPS 돌잔치</Title>
      <SubTitle>
        소중한 우리아이의 첫 생일, 빕스에서 특별한 추억을 만드세요
      </SubTitle>
      <ConWrap>
        <Img src="img/reserve2.png" />
        <TextWrap>
          <Text>SPECIAL BENEFIT</Text>
          <Text>
            돌잔치 전문 파티 플래너와 연계
            <br />
            <span>(돌상, 포토테이블, 전문 돌잡이 사회 진행)</span>
          </Text>
          <Text>다양한 제휴카드 할인 혜택</Text>
          <Text>영상물 상영 및 음향시설 제공</Text>
          <Text>빕스만의 특별한 스테이크 제공, 시즌별 샐러드 바 이용</Text>
        </TextWrap>
      </ConWrap>
      <Bg1>
        <BgCover />
      </Bg1>
      <Bg2>
        <BgCover2 />
      </Bg2>
    </Section>
  );
};
