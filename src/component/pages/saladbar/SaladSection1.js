import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 300px;
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
  background-color: rgba(54, 226, 35, 0.7);
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
  color: rgba(54, 226, 35, 1);
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
`;

export const SaladSection1 = () => {
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
          Unbelievable Taste <br /> Salad Bar
        </Title>
        <Text>
          신선함이 가득한 빕스 샐러드바를 마음껏 즐기세요.
          <br />
          신선한 샐러드와 서브메뉴들은 스테이크의 풍미를 더해줍니다
          <br /> 하나도 놓치고 싶지 않은 My No.1 Salad bar
        </Text>
      </TextWrap>
      <Img src="img/salad.png" />
    </Section>
  );
};
