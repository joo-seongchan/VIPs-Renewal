import styled from "styled-components";
import { menuDb, placeDb } from "./mainDb";

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
  margin-bottom: 40px;
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

const SecondLine = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
const PlaceWrap = styled.div`
  margin-right: 15px;
  select {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 200px;
    height: 50px;
    border: 1px solid rgba(112, 112, 112, 1);
    background: url(img/arrow2.png) no-repeat 95% 50%;
    cursor: pointer;
    option {
      background-color: #1d1d1d;
    }
  }
`;
const Menu = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;
const DateWrap = styled.div`
  margin-right: 15px;
  input {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 200px;
    height: 50px;
    border: 1px solid rgba(112, 112, 112, 1);
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    background: url(img/arrow2.png) no-repeat center;
  }
`;
const TimeWrap = styled.div`
  input {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 10px;
    width: 200px;
    height: 50px;
    border: 1px solid rgba(112, 112, 112, 1);
  }
  input[type="time"]::-webkit-calendar-picker-indicator {
    background: url(img/arrow2.png) no-repeat center;
  }
`;

const ThirdLine = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
const MenuWrap = styled.div`
  margin-right: 15px;
  select {
    all: unset;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 200px;
    height: 50px;
    border: 1px solid rgba(112, 112, 112, 1);
    background: url(img/arrow2.png) no-repeat 95% 50%;
    cursor: pointer;
    option {
      background-color: #1d1d1d;
    }
  }
`;
const PeopleWrap = styled.div`
  input {
    all: unset;
    height: 50px;
    box-sizing: border-box;
    width: 100px;
    border: 1px solid rgba(112, 112, 112, 1);
    padding: 0 20px;
  }
`;

const CheckWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
const Check = styled.div`
  opacity: 0.8;
`;
const Button = styled.div`
  width: 250px;
  height: 50px;
  border: 1px solid rgba(112, 112, 112, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
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
          <SecondLine>
            <PlaceWrap>
              <Menu>장소</Menu>
              <select>
                <option value="" selected></option>
                {placeDb.map((db) => (
                  <option value={db.id}>{db.place}</option>
                ))}
              </select>
            </PlaceWrap>
            <DateWrap>
              <Menu>날짜</Menu>
              <input type="date"></input>
            </DateWrap>
            <TimeWrap>
              <Menu>시간</Menu>
              <input type="time" step="1800"></input>
            </TimeWrap>
          </SecondLine>
          <ThirdLine>
            <MenuWrap>
              <Menu>메뉴</Menu>
              <select>
                <option value="" selected></option>
                {menuDb.map((db) => (
                  <option value={db.id}>{db.menu}</option>
                ))}
              </select>
            </MenuWrap>
            <PeopleWrap>
              <Menu>인원수</Menu>
              <input></input>
            </PeopleWrap>
          </ThirdLine>
          <CheckWrap>
            <input type="checkbox"></input>
            <Check>개인 정보수집에 동의 합니다.</Check>
          </CheckWrap>
          <Button>예약하기</Button>
        </form>
      </LeftCon>
      <Img>
        <ImgCover />
      </Img>
    </Section>
  );
};
