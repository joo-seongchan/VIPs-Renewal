import styled from "styled-components";

const Section = styled.section``;
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
  background: url(img/circle2.png) no-repeat center/cover;
  position: relative;
  top: -65px;
  left: 0;
  z-index: 9999;
`;
const Img = styled.div``;
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
`;

export const Section3 = () => {
  return (
    <Section>
      <Title>Salad BAR</Title>
      <ConWrap>
        <BoxConWrap>
          <Box>
            <Menu>Salad</Menu>
            <SubMenu>Garden Salad, Mixed Salad, Soup</SubMenu>
          </Box>
          <Box>
            <Menu>HOT FOOD</Menu>
            <SubMenu>Pizza, Pasta, Dishs</SubMenu>
          </Box>
          <Box>
            <Menu>Special Drink</Menu>
            <SubMenu>Fruit Ade, Wine, Beer</SubMenu>
          </Box>
        </BoxConWrap>
        <ImgWrap>
          <Img>
            <img src="img/salad1.png" />
          </Img>
        </ImgWrap>
        <DetailMenuWrap>
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
      </ConWrap>
    </Section>
  );
};
