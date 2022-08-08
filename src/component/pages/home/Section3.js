import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-bottom: 150px;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  margin-bottom: 70px;
`;
const ConWrap = styled.div`
  display: flex;
`;
const BoxConWrap = styled.div`
  margin-right: 150px;
`;
const Box = styled.div`
  width: 420px;
  height: 180px;
  border: 1px solid rgba(112, 112, 112, 0.2);
  padding: 30px;
  margin-bottom: 25px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Menu = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 45px;
`;
const SubMenu = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
`;
const ImgWrap = styled.div`
  width: 750px;
  min-width: 750px;
  height: 739px;
  min-height: 739px;
  background: url(${(props) => props.bg}) no-repeat center/cover;
  border-radius: 45%;
  position: relative;
  top: -65px;
  left: 0;
  z-index: 9999;
  overflow: hidden;
`;
const Img = styled.div`
  position: absolute;
  top: -750px;
  left: -750px;
  transition: 1s;
  transform: rotate(${(props) => props.deg});
`;
const DetailMenuWrap = styled.div``;
const DetailMenu = styled.div`
  width: 300px;
  margin-bottom: 145px;
  &:nth-child(2) {
    position: relative;
    top: 0;
    left: 65px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
const DtMenuName = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(112, 112, 112, 0.2);
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 15px;
`;
const Dt = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  line-height: 25px;
`;

export const Section3 = () => {
  const [deg, setDeg] = useState("0deg");
  const [bg, setBg] = useState("img/circle2.png");
  const [detail, setDetail] = useState("1");
  return (
    <Section>
      <Title>SALAD BAR</Title>
      <ConWrap>
        <BoxConWrap>
          <Box
            onClick={() => {
              setDeg("0deg");
              setBg("img/circle2.png");
              setDetail("1");
            }}
          >
            <Menu>Salad</Menu>
            <SubMenu>가든샐러드, 믹스샐러드, 스프</SubMenu>
          </Box>
          <Box
            onClick={() => {
              setDeg("90deg");
              setBg("img/circle3.png");
              setDetail("2");
            }}
          >
            <Menu>Special Drink</Menu>
            <SubMenu>과일에이드, 와인, 맥주</SubMenu>
          </Box>
          <Box
            onClick={() => {
              setDeg("180deg");
              setBg("img/circle4.png");
              setDetail("3");
            }}
          >
            <Menu>HOT FOOD</Menu>
            <SubMenu>피자, 파스타, 폭립, 치킨</SubMenu>
          </Box>
        </BoxConWrap>
        <ImgWrap bg={bg}>
          <Img deg={deg}>
            <img src="img/salad1.png" />
          </Img>
        </ImgWrap>
        <DetailMenuWrap
          style={{ display: `${detail === "1" ? "block" : "none"}` }}
        >
          <DetailMenu>
            <DtMenuName>Garden Salad</DtMenuName>
            <Dt>신선하고 건강한 샐러드</Dt>
          </DetailMenu>
          <DetailMenu>
            <DtMenuName>Mixed Salad</DtMenuName>
            <Dt>
              트로피칼 파인애플 슬로우, 핫타이 누들 샐러드, 크림치즈 파스타
              샐러드, 망고 샐러드, 배지테리언 미트 샐러드
            </Dt>
          </DetailMenu>
          <DetailMenu>
            <DtMenuName>Soup</DtMenuName>
            <Dt>굴라쉬스프, 머쉬룸스프, 된장국</Dt>
          </DetailMenu>
        </DetailMenuWrap>
        <DetailMenuWrap
          style={{ display: `${detail === "2" ? "block" : "none"}` }}
        >
          <DetailMenu>
            <DtMenuName>Fruit Drink</DtMenuName>
            <Dt>
              청포도 에이드, 라임에이드, 레몬에이드, 샤인머스켓에이드,
              애플망고에이드
            </Dt>
          </DetailMenu>
          <DetailMenu>
            <DtMenuName>Wine</DtMenuName>
            <Dt>스파클링와인, 화이트와인, 레드와인, 글래스 와인</Dt>
          </DetailMenu>
          <DetailMenu>
            <DtMenuName>Beer</DtMenuName>
            <Dt>생맥주, 클라우드, 블랑1866</Dt>
          </DetailMenu>
        </DetailMenuWrap>
        <DetailMenuWrap
          style={{ display: `${detail === "3" ? "block" : "none"}` }}
        >
          <DetailMenu>
            <DtMenuName>Pizza</DtMenuName>
            <Dt>
              콤비네이션, 불고기, 페퍼로니, 포테이토, 리얼고구마, 고구마무스,
              치즈, 쉬림프
            </Dt>
          </DetailMenu>
          <DetailMenu>
            <DtMenuName>HOT</DtMenuName>
            <Dt>
              폴드포크 플래터, 밥비큐 포크 플래터, 코코넛 크런치 폭립, 스파이시
              바비큐치킨, 레몬 크림 치킨, 블랙페퍼 크럼블 쉬림프,
              바비큐포크라이스
            </Dt>
          </DetailMenu>
          <DetailMenu>
            <DtMenuName>Pasta</DtMenuName>
            <Dt>토마토, 크림, 알리오올리오, 페스토</Dt>
          </DetailMenu>
        </DetailMenuWrap>
      </ConWrap>
    </Section>
  );
};
