import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  width: 100%;
  padding: 0 220px;
  min-width: 1500px;
  margin-bottom: 200px;
  position: relative;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 35px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  text-align: center;
  margin-bottom: 100px;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  cursor: pointer;
  &:hover {
    p {
      color: ${mainstyle.mainColor};
    }
  }
`;
const Img = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 25px;
`;
const TextWrap = styled.div`
  padding-top: 50px;
`;
const Text = styled.div`
  font-size: 20px;
  opacity: 0.8;
  margin-bottom: 20px;
  line-height: 25px;
  text-align: center;
`;
const Nav = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
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
  bottom: -400px;
  left: -700px;
  z-index: -1;
`;

const BgCover = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #1d1d1d;
`;

export const MemSection3 = () => {
  return (
    <Section>
      <Title>빕스 기프트 카드 구매 안내</Title>
      <SubTitle>소중한 사람에게 감사의 마음을 표현하세요!</SubTitle>
      <ConWrap>
        <Con>
          <Img
            style={{
              background: `url(img/memimg3.png) no-repeat center/cover`,
            }}
          />
          <TextWrap>
            <Text>
              빕스 매장에서 기프트카드를
              <br /> 구매 할 수 있어요.
            </Text>
            <Nav>매장 확인하기</Nav>
          </TextWrap>
        </Con>
        <Con>
          <Img
            style={{
              background: `url(img/memimg2.png) no-repeat center/cover`,
            }}
          />
          <TextWrap>
            <Text>
              CJ ONE 홈페이지에서 <br /> 기프트카드를 구매 할 수 있어요.
            </Text>
            <Nav>온라인 구매하기</Nav>
          </TextWrap>
        </Con>
        <Con>
          <Img
            style={{
              background: `url(img/memimg6.png) no-repeat center/cover`,
            }}
          />
          <TextWrap>
            <Text>
              카카오톡 선물하기에서 기프트카드를
              <br /> 구매 할 수 있어요!
            </Text>
            <Nav>카카오톡 바로가기</Nav>
          </TextWrap>
        </Con>
      </ConWrap>
      <Bg>
        <BgCover></BgCover>
      </Bg>
    </Section>
  );
};
