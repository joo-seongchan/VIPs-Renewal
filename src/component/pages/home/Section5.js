import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.section``;
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
          <Title>NOTICE</Title>
          <Text>
            VIPS 매장을 쉽게 빠르게 찾아보세요!
            <br />
            <span>STORE </span>
          </Text>
          <Text>
            진행준인 이벤트를 즐겨보세요!
            <br />
            <span>EVENT</span>
          </Text>

          <Text>
            VIPS의 VIP만을 위한 혜택!
            <br />
            <span>MEMBERSHIP</span>
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
