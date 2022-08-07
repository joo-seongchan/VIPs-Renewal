import { useState } from "react";
import styled from "styled-components";

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

export const ReSection1Popup = ({
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
    <>
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
    </>
  );
};
