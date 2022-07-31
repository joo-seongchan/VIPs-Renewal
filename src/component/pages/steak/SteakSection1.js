import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const BgWrap = styled.div`
  width: 685px;
  height: 685px;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;
`;
const Bg = styled.div`
  width: 1050px;
  height: 1050px;
  border-radius: 50%;
  background-color: ${mainstyle.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -365px;
  right: 365;
`;
const BgCover = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #1d1d1d;
`;

const TextWrap = styled.div`
  padding-top: 80px;
`;
const SubTitle = styled.div`
  font-size: 45px;
  font-weight: 700;
  color: ${mainstyle.mainColor};
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 76px;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 90px;
`;
const Text = styled.div`
  font-size: 16px;
  font-weight: 300;
  opacity: 0.8;
  line-height: 30px;
`;
const Img = styled.img`
  margin-right: 100px;
  margin-top: 120px;
`;

export const SteakSection1 = () => {
  return (
    <Section>
      <BgWrap>
        <Bg>
          <BgCover></BgCover>
        </Bg>
      </BgWrap>
      <TextWrap>
        <SubTitle>VIPS</SubTitle>
        <Title>
          My No.1 Steak House <br />
          Enjoy Steaks
        </Title>
        <Text>
          빕스의 스테이크는 최고일 수 밖에 없습니다. 빕스만의 특별한
          <br />
          노하우로 만들어 더 맛있는 빕스의 스페셜 스테이크
          <br />그 잊을 수 없는 맛을 지금 경험하세요!
        </Text>
      </TextWrap>
      <Img src="img/steakimg1.png" />
    </Section>
  );
};
