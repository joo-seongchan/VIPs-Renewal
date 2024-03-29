import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";
import { section1Db } from "./mainDb";

const Section = styled.section`
  margin-bottom: 150px;
`;
const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 70px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 35px;
  margin-bottom: 50px;
`;
const Con = styled.div`
  min-width: 400px;
  border: 1px solid rgba(112, 112, 112, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const Img = styled.img`
  width: 100%;
`;
const TextWrap = styled.div`
  padding: 30px 20px;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 35px;
  opacity: 0.8;
`;
const MainTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 40px;
`;
const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Unit = styled.div`
  font-size: 16px;
  font-weight: 300;
  opacity: 0.5;
`;
const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: rgba(226, 35, 49, 1);
  span {
    font-size: 30px;
    margin-left: 10px;
  }
`;
const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  width: 260px;
  height: 60px;
  position: relative;
  overflow: hidden;
  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 500;
    border: 1px solid rgba(112, 112, 112, 0.2);
  }
  &:hover {
    p {
      transform: translateX(0);
    }
  }
`;
const BtnCover = styled.p`
  width: 100%;
  height: 100%;
  background-color: ${mainstyle.mainColor};
  position: absolute;
  transform: translateX(-100%);
  transition: 0.2s;
`;

export const Section1 = () => {
  return (
    <Section>
      <Title>ENJOY STEAK</Title>

      <ConWrap>
        {section1Db.map((db) => (
          <Con key={db.id}>
            <Link to="/steak">
              <Img src={db.imgUrl} />
              <TextWrap>
                <SubTitle>{db.subtitle}</SubTitle>
                <MainTitle>{db.title}</MainTitle>
                <PriceWrap>
                  <Unit>{db.origin}</Unit>
                  <Price>
                    {db.unit}
                    <span>{db.price}</span> 원
                  </Price>
                </PriceWrap>
              </TextWrap>
            </Link>
          </Con>
        ))}
      </ConWrap>
      <ButtonWrap>
        <Button>
          <BtnCover></BtnCover>
          <Link to="/steak">자세히보기</Link>
        </Button>
      </ButtonWrap>
    </Section>
  );
};
