import styled from "styled-components";

const Section = styled.div`
  position: relative;
  margin-bottom: 300px;
  min-width: 1900px;
`;
const MenuWrap = styled.div`
  width: 480px;
  height: 800px;
  /* border-top-right-radius: 240px; */

  position: absolute;
  top: -200px;
  left: 0;
  overflow: hidden;
  z-index: 0;
`;
const Img = styled.img`
  transform: translate(-300px, -100px);
`;
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
  position: relative;
  z-index: 9999;
`;
const TextWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  z-index: 9999;
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

const Bg = styled.img`
  position: absolute;
  top: -300px;
  right: 0;
  z-index: -1;
`;

export const SaladSection5 = () => {
  return (
    <Section>
      <MenuWrap>
        <Img src="img/saladimg8.png" />
      </MenuWrap>
      <Box>
        <Title>
          SEAFOOD
          <br />& STEAM
        </Title>
        <TextWrap>
          <Line />
          <Text>
            신선한 해산물로 만든 해산물요리! <br />
            바다의 향기가 느껴지는 신선한 해산물과 <br />
            고급스런 해산물요리
          </Text>
        </TextWrap>
      </Box>
      <ImgWrap>
        <Line2></Line2>
        <ImgBoxWrap>
          <ImgBox
            style={{
              background: "url(img/saladimg9.png) no-repeat center/cover",
            }}
          ></ImgBox>
          <ImgBox
            style={{
              background: "url(img/saladimg10.png) no-repeat center/cover",
            }}
          ></ImgBox>
        </ImgBoxWrap>
      </ImgWrap>
      <Bg src="img/saladbg4.png" />
    </Section>
  );
};
