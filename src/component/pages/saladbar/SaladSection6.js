import styled from "styled-components";

const Section = styled.div`
  position: relative;
  margin-bottom: 300px;
  display: flex;
  justify-content: right;
  min-width: 1900px;
`;
const MenuWrap = styled.div`
  width: 450px;
  height: 720px;
  position: absolute;
  top: -100px;
  right: 0;
  overflow: hidden;
  z-index: 0;
`;
const Img = styled.img`
  transform: translate(-100px, -30px);
`;
const Box = styled.div`
  width: 1500px;
  height: 500px;
  background-color: black;
  padding: 70px 0 0 700px;
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
  left: 120px;
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
  background-color: gray;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;
const Bg = styled.img`
  position: absolute;
  top: -130px;
  left: 700px;
`;

export const SaladSection6 = () => {
  return (
    <Section>
      <ImgWrap>
        <Line2></Line2>
        <ImgBoxWrap>
          <ImgBox
            style={{
              background: "url(img/saladimg12.png) no-repeat center/cover",
            }}
          ></ImgBox>
          <ImgBox
            style={{
              background: "url(img/saladimg13.png) no-repeat center/cover",
            }}
          ></ImgBox>
        </ImgBoxWrap>
      </ImgWrap>
      <Box>
        <Title>
          NOODLE
          <br />& HOT
        </Title>
        <TextWrap>
          <Line />
          <Text>
            바베큐와 면의 만남! <br />
            폭립,바베큐,치킨 등 다양한 요리를 만나보세요! <br />
            탄수화물 + 고기 = 정답!
          </Text>
        </TextWrap>
      </Box>
      <MenuWrap>
        <Img src="img/saladimg11.png" />
      </MenuWrap>
      <Bg src="img/saladbg5.png" />
    </Section>
  );
};
