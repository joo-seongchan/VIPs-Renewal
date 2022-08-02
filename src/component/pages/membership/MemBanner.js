import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.section`
  width: 100%;
  min-width: 1800px;
  height: 100vh;
  min-height: 800px;
  background: url(img/membg.jpg) no-repeat center/cover;
  position: relative;
  top: -100px;
  left: 0;
  z-index: 0;
  margin-bottom: 300px;
`;
const BgCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 0 220px;
  padding-top: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  span {
    color: ${mainstyle.mainColor};
  }
`;
const MainTitle = styled.div`
  font-size: 76px;
  font-weight: 600;
  line-height: 100px;
`;
const ConWrap = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: -200px;
  left: 0;
`;

const Con = styled.div`
  position: relative;
  width: 440px;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  &:hover {
    div:last-child {
      img:nth-child(1) {
        transform: translate(90px, 0) scale(1.1);
      }
      img:nth-child(2) {
        transform: translate(-80px, -40px);
      }
    }
  }
`;
const ConImg = styled.img`
  width: 100%;
  height: 35%;
  background-color: white;
`;
const TextWrap = styled.div`
  width: 100%;
  padding: 30px 35px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 35px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.8;
  line-height: 25px;
`;
const CircleWrap = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
`;
const Circle = styled.img`
  transform: translate(90px, 0);
  transition: 0.2s;
`;
const Arrow = styled.img`
  transform: translate(-100px, -40px);
  transition: 0.2s;
`;

export const MemBanner = () => {
  return (
    <Section>
      <BgCover>
        <MainTitle>
          <span>VIPS</span> INSIDER <br />
          Membership
        </MainTitle>
        <ConWrap>
          <Con>
            <ConImg src="img/memimg1.png" />
            <TextWrap>
              <Title>CJ ONE 혜택 안내</Title>
              <Text>
                문화, 외식, 엔터테인먼트 등 다양한 라이프 스타일 브랜드가 하나의
                멤버십 서비스로 통합된 CJ 통합 멤버십 서비스 입니다.
              </Text>
            </TextWrap>
            <CircleWrap>
              <Circle src="img/circle.png" />
              <Arrow src="img/arrow.png" />
            </CircleWrap>
          </Con>
          <Con>
            <ConImg src="img/memimg7.png" />
            <TextWrap>
              <Title>기프트카드</Title>
              <Text>
                소중한 사람들에게 마음을 전할 수 있는 빕스 기프트카드를
                소개합니다.
              </Text>
            </TextWrap>
            <CircleWrap>
              <Circle src="img/circle.png" />
              <Arrow src="img/arrow.png" />
            </CircleWrap>
          </Con>
          <Con>
            <ConImg src="img/memimg3.png" />
            <TextWrap>
              <Title>상품권</Title>
              <Text>
                빕스를 즐기는 다양한 방법~ 상품권 부터 모바일 식사권 까지!
              </Text>
            </TextWrap>
            <CircleWrap>
              <Circle src="img/circle.png" />
              <Arrow src="img/arrow.png" />
            </CircleWrap>
          </Con>
        </ConWrap>
      </BgCover>
    </Section>
  );
};
