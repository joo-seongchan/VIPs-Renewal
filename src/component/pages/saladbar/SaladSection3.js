import styled from "styled-components";

const Section = styled.div`
  position: relative;
  margin-bottom: 300px;
  min-width: 1900px;
`;
const MenuWrap = styled.div`
  width: 380px;
  height: 660px;
  position: absolute;
  top: -100px;
  left: 0;
  overflow: hidden;
`;
const Img = styled.img``;
const Box = styled.div`
  width: 1500px;
  height: 500px;
  background-color: black;
  padding: 70px 0 0 400px;
`;
const Title = styled.div`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 55px;
`;
const TextWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const Line = styled.div`
  width: 3px;
  height: 80%;
  background-color: rgba(54, 226, 35, 1);
  margin-right: 20px;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  line-height: 40px;
`;
const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 120px;
`;
const ImgBoxWrap = styled.div`
  display: flex;
`;
const Line2 = styled.div`
  width: 300px;
  height: 3px;
  background-color: rgba(54, 226, 35, 1);
  margin-bottom: 50px;
`;
const ImgBox = styled.div`
  width: 400px;
  height: 400px;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

const Bg1 = styled.img`
  position: absolute;
  top: -130px;
  left: 750px;
`;
const Bg2Wrap = styled.div`
  width: 269px;
  height: 384px;
  overflow: hidden;
  position: absolute;
  top: -50px;
  right: 0;
  z-index: -1;
`;
const Bg2 = styled.img``;

export const SaladSection3 = () => {
  return (
    <Section>
      <MenuWrap>
        <Img src="img/saladimg2.png" />
      </MenuWrap>
      <Box>
        <Title>
          SALAD <br />& SOUP
        </Title>
        <TextWrap>
          <Line />
          <Text>
            VIPS만의 시크릿 레시피로 숙성된 소스의
            <br />
            깊은 맛과 신선한 재료의 풍미가 더해진
            <br /> VIPS 홈메이트 스프 & 샐러드
          </Text>
        </TextWrap>
      </Box>
      <ImgWrap>
        <Line2></Line2>
        <ImgBoxWrap>
          <ImgBox
            style={{
              background: "url(img/saladimg3.png) no-repeat center/cover",
            }}
          ></ImgBox>
          <ImgBox
            style={{
              background: "url(img/saladimg4.png) no-repeat center/cover",
            }}
          ></ImgBox>
        </ImgBoxWrap>
      </ImgWrap>
      <Bg1 src="img/saladbg1.png" />
      <Bg2Wrap>
        <Bg2 src="img/saladbg2.png" />
      </Bg2Wrap>
    </Section>
  );
};
