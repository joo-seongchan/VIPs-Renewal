import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.section`
  width: 100%;
  margin-bottom: 200px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
`;
const Img = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 25px;
  background: url(img/memimg5.png) no-repeat center/cover;
`;
const ConWrap = styled.div`
  width: 60%;
  height: 100%;
  padding-top: 140px;
`;
const Box = styled.div`
  width: 100%;
  height: 560px;
  background-color: black;
  padding-top: 85px;
  padding-left: 100px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: 500;
  span {
    color: ${mainstyle.mainColor};
  }
  margin-bottom: 40px;
`;
const TextWrap = styled.div`
  margin-bottom: 50px;
`;
const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  opacity: 0.8;
  margin-bottom: 35px;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.6;
`;

export const MemSection2 = () => {
  return (
    <Section>
      <Wrap>
        <Img />
        <ConWrap>
          <Box>
            <Title>
              <span>VIPS</span> MANIA
            </Title>
            <TextWrap>
              <Subtitle>매주 수요일</Subtitle>
              <Text>최대 15% 추가 할인 , 매니아 플러스 15%, 매니아 10%</Text>
            </TextWrap>
            <TextWrap>
              <Subtitle>스테이크</Subtitle>
              <Text>
                1만 5천원 할인권, 매니아 플러스 1만 5천원 할인, 매니아 1만원
                할인
              </Text>
            </TextWrap>
            <TextWrap>
              <Subtitle>샐러드바</Subtitle>
              <Text>1인 무료 식사권</Text>
            </TextWrap>
          </Box>
        </ConWrap>
      </Wrap>
    </Section>
  );
};
