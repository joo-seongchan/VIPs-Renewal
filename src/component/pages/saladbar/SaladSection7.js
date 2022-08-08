import styled from "styled-components";

const Section = styled.div`
  position: relative;
  margin-bottom: 300px;
`;
const MenuWrap = styled.div`
  width: 500px;
  height: 1000px;
  position: absolute;
  top: -420px;
  left: 0;
  overflow: hidden;
`;
const Img = styled.img`
  transform: translate(-220px, 100px);
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
const Bg = styled.img`
  position: absolute;
  top: -330px;
  left: 900px;
`;

export const SaladSection7 = () => {
  return (
    <Section>
      <MenuWrap>
        <Img src="img/saladimg14.png" />
      </MenuWrap>
      <Box>
        <Title>
          DRINK <br />& WINE
        </Title>
        <TextWrap>
          <Line />
          <Text>
            스테이크와 요리에 풍미를 더해줄 음료!
            <br />
            맥주의 시원함과 와인의 달콤함으로 풍미를
            <br />
            더해보세요!
          </Text>
        </TextWrap>
      </Box>
      <ImgWrap>
        <Line2></Line2>
        <ImgBoxWrap>
          <ImgBox
            style={{
              background: "url(img/saladimg15.png) no-repeat center/cover",
            }}
          ></ImgBox>
          <ImgBox
            style={{
              background: "url(img/saladimg16.png) no-repeat center/cover",
            }}
          ></ImgBox>
        </ImgBoxWrap>
      </ImgWrap>
      <Bg src="img/saladbg6.png" />
    </Section>
  );
};
