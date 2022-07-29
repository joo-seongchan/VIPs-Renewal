import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 740px;
  background-color: rgba(255, 255, 255, 0.03);
  margin-bottom: 250px;
  display: flex;
  justify-content: space-between;
`;

const LeftCon = styled.div`
  width: 840px;
  padding-top: 115px;
`;
const Title = styled.div`
  font-size: 70px;
  font-weight: 500;
  margin-bottom: 70px;
`;

const FirstLine = styled.div`
  width: 100%;
  display: flex;
`;
const NameWrap = styled.div`
  display: flex;
  margin-right: 30px;
  input {
    all: unset;
    width: 200px;
    border: 1px solid rgba(112, 112, 112, 1);
    padding: 0 20px;
  }
`;
const Name = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid rgba(112, 112, 112, 1);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhWrap = styled.div`
  display: flex;
  input {
    all: unset;
    width: 200px;
    border: 1px solid rgba(112, 112, 112, 1);
    padding: 0 20px;
  }
`;
const Ph = styled.div`
  width: 150px;
  height: 50px;
  border: 1px solid rgba(112, 112, 112, 1);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  width: 735px;
  height: 840px;
  background: url(img/reserve1.png) no-repeat center/cover;
  transform: translateY(-50px);
`;
const ImgCover = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    closest-corner,
    rgba(0, 0, 0, 0),
    rgba(14, 14, 14, 0.83)
  );
`;
export const Section4 = () => {
  return (
    <Section>
      <LeftCon>
        <Title>RESERVE</Title>
        <form>
          <FirstLine>
            <NameWrap>
              <Name>이름</Name>
              <input></input>
            </NameWrap>
            <PhWrap>
              <Ph>전화번호</Ph>
              <input></input>
            </PhWrap>
          </FirstLine>
        </form>
      </LeftCon>
      <Img>
        <ImgCover />
      </Img>
    </Section>
  );
};
