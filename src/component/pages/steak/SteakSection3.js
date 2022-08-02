import { useState } from "react";
import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
`;
const Name = styled.div`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 120px;
  span {
    color: ${mainstyle.mainColor};
  }
`;
const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 800px;
  align-items: center;
  justify-content: space-between;
`;
const TextWrap = styled.div`
  width: 470px;
`;
const Con = styled.div`
  padding: 40px 0 30px 0;
  border-bottom: 1px solid #707070;
  cursor: pointer;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8;
  margin-bottom: 35px;
`;
const Title = styled.div`
  width: 65%;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 20px;
`;
const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Origin = styled.div`
  font-size: 16px;
  font-weight: 300;
  opacity: 0.6;
`;
const Price = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${mainstyle.mainColor};
  span {
    font-size: 30px;
    margin-left: 10px;
  }
`;
const ImgWrap = styled.div`
  width: 1100px;
  height: 100%;
  background-color: gray;
  overflow: hidden;
`;
const Img = styled.div`
  width: 100%;
  height: 100%; ;
`;
export const SteakSection3 = ({ db }) => {
  const [img, setImg] = useState("0");
  return (
    <Section>
      <Name>
        VIPS<span> {db.name}</span>
      </Name>
      <ConWrap>
        <TextWrap>
          {db.contents.map((db) => (
            <Con
              onClick={() => {
                setImg(`${db.id * -100}%`);
              }}
              key={db.id}
            >
              <SubTitle>{db.subtitle}</SubTitle>
              <Title>{db.title}</Title>
              <PriceWrap>
                <Origin>{db.origin}</Origin>
                <Price>
                  {db.unit}
                  <span>{db.price}</span>원
                </Price>
              </PriceWrap>
            </Con>
          ))}
        </TextWrap>
        <ImgWrap>
          {db.contents.map((db) => (
            <Img
              style={{
                backgroundColor: `${db.imgurl}`,
                transform: `translateY(${img})`,
              }}
            />
          ))}
        </ImgWrap>
      </ConWrap>
    </Section>
  );
};
