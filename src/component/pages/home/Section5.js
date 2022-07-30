import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.section`
  margin-bottom: 200px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TextWrap = styled.div`
  padding-top: 100px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 75px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 40px;
  margin-bottom: 60px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: white;
  }
`;
const Button = styled.div`
  width: 260px;
  height: 60px;
  border: 1px solid rgba(112, 112, 112, 0.2);
  overflow: hidden;
  position: relative;
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 24px;
  }
  &:hover {
    p {
      transform: translateX(0);
    }
  }
`;
const BtnCover = styled.p`
  width: 100%;
  height: 100%;
  background-color: ${mainstyle.mainColor};
  position: absolute;
  transform: translateX(-100%);
  transition: 0.3s;
`;
const Img = styled.img``;

export const Section5 = () => {
  return (
    <Section>
      <Wrap>
        <TextWrap>
          <Title>STORE</Title>
          <Text>
            우리동네에 가장 가까운 VIPS는?
            <br />
            <span>매장안내</span>
          </Text>
          <Text>
            소중한 우리아이의 첫 생일을, 빕스에서 특별한 추억을 만드세요!
            <br />
            <span>돌잔치</span>
          </Text>

          <Text>
            레스토랑 예절 교육, 쿠키만들기,맛있는 간식만들기등
            <br />
            즐겁고 유익한 프로그램이 준비되어 있습니다.
            <br />
            <span>어린이 체험교실</span>
          </Text>
          <Button>
            <BtnCover></BtnCover>
            <Link to="/benefit">바로가기</Link>
          </Button>
        </TextWrap>
        <Img src="/img/notice1.png" />
      </Wrap>
    </Section>
  );
};
