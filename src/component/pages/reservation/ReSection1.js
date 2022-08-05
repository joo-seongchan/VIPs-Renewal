import { useState } from "react";
import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const Section = styled.div`
  width: 100%;
  height: 1100px;
  background: url(img/reimg1.png) no-repeat center/cover;
  transform: translateY(-100px);
`;

const BgCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 75px;
  margin-bottom: 50px;
  span {
    color: ${mainstyle.mainColor};
  }
`;
const Box = styled.div`
  width: 1040px;
  height: 700px;
  background-color: black;
  margin-bottom: 50px;
`;

const Option = styled.div`
  width: 100%;
  height: 60px;
  background-color: gray;
  display: flex;
  label {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    input {
      display: none;
    }
  }
`;

export const ReSection1 = () => {
  const [option, setOption] = useState("일반");
  return (
    <Section>
      <BgCover>
        <Title>
          <span>VIPS</span> RESERVATION
        </Title>
        <Box>
          <form>
            <Option>
              <label
                style={{
                  backgroundColor: `${
                    option === "일반" ? "black" : "rgba(72,72,72,1)"
                  }`,
                }}
                onClick={() => {
                  setOption("일반");
                }}
              >
                <input type="radio" name="option" checked></input>
                일반예약
              </label>
              <label
                style={{
                  backgroundColor: `${
                    option === "일반" ? "rgba(72,72,72,1)" : "black"
                  }`,
                }}
                onClick={() => {
                  setOption("돌잔치");
                }}
              >
                <input type="radio" name="option"></input>
                돌잔치 예약
              </label>
            </Option>
          </form>
        </Box>
      </BgCover>
    </Section>
  );
};
