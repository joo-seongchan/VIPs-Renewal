import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Section = styled.div`
  width: 100%;
  height: 880px;
  margin-bottom: 300px;
  position: relative;
  overflow: hidden;
`;
const Bg = styled.div`
  position: absolute;
  width: 1050px;
  height: 1050px;
  background-color: ${mainstyle.mainColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-45%);
`;
const Bg2 = styled.div`
  width: 50%;
  height: 50%;
  background-color: #1d1d1d;
  border-radius: 50%;
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
  line-height: 40px;
  margin-bottom: 55px;
`;
const Button = styled.div`
  width: 260px;
  height: 60px;
  position: relative;
  overflow: hidden;
  border: 1px solid white;
  transition: 0.5s;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    z-index: 9999;
    span {
      transition: 0.5s;
    }
  }
  &:hover {
    border: 1px solid #1d1d1d;
    p {
      transform: translateX(0);
    }
    span {
      transform: rotate(270deg);
    }
  }
`;

const ButtonCover = styled.p`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${mainstyle.mainColor};
  transition: 0.3s;
  transform: translateX(-100%);
  transition-timing-function: cubic-bezier(0.54, 0.005, 0.155, 0.99),
    -webkit-transform 1000ms 600ms cubic-bezier(0.54, 0.005, 0.155, 0.99);
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
    <>
      <Bg>
        <Bg2></Bg2>
      </Bg>
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
              <ButtonCover></ButtonCover>
              <Link to="/steak">
                더보기 &nbsp;
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </Link>
            </Button>
          </TextWrap>
          <Img>
            <ImgCover></ImgCover>
          </Img>
        </ConWrap>
      </Section>
    </>
  );
};
