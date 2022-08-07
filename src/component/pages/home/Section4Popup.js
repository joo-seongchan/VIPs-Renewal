import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";

const PopUp = styled.div`
  width: 70%;
  min-width: 1300px;
  height: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transform: translate(-50%, -50%);
  padding: 50px 100px;
  z-index: 9999;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
  width: 100%;
  color: ${mainstyle.mainColor};
  margin-bottom: 50px;
  letter-spacing: -0.2rem;
`;

const Conwrap = styled.div`
  display: flex;
  position: relative;
`;

const LeftPop = styled.div`
  width: 70%;
  /* background-color: red; */
  height: 100%;
`;
const Tap = styled.div`
  font-size: 20px;
  font-weight: 100;
  margin-bottom: 20px;
`;
const TapCon = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

const Con = styled.div`
  display: flex;
`;
const Menu = styled.div`
  width: 40%;
  border: 1px solid rgba(112, 112, 112, 1);
  padding: 10px;
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
`;
const Data = styled.div`
  width: 60%;
  border: 1px solid rgba(112, 112, 112, 1);
  padding: 10px;
  padding-left: 20px;
  margin-left: 4px;
  font-weight: 500;
  font-size: 20px;
`;

const PopOrder = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid rgba(112, 112, 112, 1);
  padding: 10px;
  margin-bottom: 30px;
`;
const Text = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Button1 = styled.div`
  width: 45%;
  height: 100%;
  background-color: ${mainstyle.mainColor};
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
  }
`;
const Button2 = styled.div`
  width: 45%;
  height: 100%;
  border: 1px solid rgba(112, 112, 112, 1);
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
  }
`;
const RightPop = styled.img`
  position: absolute;
  bottom: 50px;
  right: -250px;
`;

export const Section4Popup = ({
  namedata,
  phonedata,
  placedata,
  datedata,
  timedata,
  peopledata,
  orderdata,
  popup,
}) => {
  const [pop, setPop] = useState(`${popup}`);
  return (
    <PopUp style={{ display: `${pop}` }}>
      <Title>예약이 완료 되었습니다!</Title>
      <Conwrap>
        <LeftPop>
          <Tap>예약자 정보</Tap>
          <TapCon>
            <Con>
              <Menu>성함</Menu>
              <Data>{namedata}</Data>
            </Con>

            <Con>
              <Menu>휴대폰</Menu>
              <Data> {phonedata}</Data>
            </Con>
          </TapCon>
          <Tap>예약 상세</Tap>
          <TapCon>
            <Con>
              <Menu>매장</Menu>
              <Data> {placedata}</Data>
            </Con>
            <Con>
              <Menu>예약 날짜</Menu>
              <Data>{datedata}</Data>
            </Con>
            <Con>
              <Menu>예약 시간</Menu>
              <Data> {timedata}</Data>
            </Con>
            <Con>
              <Menu>예약 인원</Menu>
              <Data> {peopledata}</Data>
            </Con>
          </TapCon>
          <Tap>요청 사항</Tap>
          <PopOrder>{orderdata}</PopOrder>
          <Text>예약은 마이페이지 또는 휴대폰번호로 조회가능 합니다.</Text>
          <ButtonWrap>
            <Button1
              onClick={() => {
                setPop("none");
              }}
            >
              <Link to="/">홈으로</Link>
            </Button1>

            <Button2
              onClick={() => {
                setPop("none");
              }}
            >
              <Link to="/">예약 확인</Link>
            </Button2>
          </ButtonWrap>
        </LeftPop>
        <RightPop src="img/popupimg.png"></RightPop>
      </Conwrap>
    </PopUp>
  );
};
