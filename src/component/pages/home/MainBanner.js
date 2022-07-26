import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 880px;
  margin-bottom: 300px;
`;
const ConWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const TextWrap = styled.div`
  width: 50%;
  padding-top: 120px;
  min-width: 600px;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`;
const MainTitle = styled.div`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 35px;
`;
const Text = styled.div`
  font-size: 26px;
  font-weight: 300;
  opacity: 0.7;
  margin-bottom: 55px;
`;
const Button = styled.div`
  width: 280px;
  height: 60px;
  border: 1px solid white;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
  }
`;

const Img = styled.div`
  width: 50%;
  height: 100%;
  background: url(img/steak1.png) no-repeat center/cover;
`;
const ImgCover = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(22, 22, 22, 0.6)
  );
`;

export const MainBanner = () => {
  return (
    <Section>
      <ConWrap>
        <TextWrap>
          <SubTitle>My No.1 Steak House Vips</SubTitle>
          <MainTitle>STEAKE HOUSE</MainTitle>
          <Text>
            빕스만의 특별한 노하우로 만들어 더 맛있는 빕스의 스페셜 스테이크
            <br />
            그잊을 수 없는 맛을 지금 경험하세요!
          </Text>
          <Button>
            <Link to="/steak">더보기 +</Link>
          </Button>
        </TextWrap>
        <Img>
          <ImgCover></ImgCover>
        </Img>
      </ConWrap>
    </Section>
  );
};
