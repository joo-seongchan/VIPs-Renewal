import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { mainstyle } from "../../../styles/GlobalStyle";
import { Section4Popup } from "./Section4Popup";

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
  padding-top: 70px;
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
const ErrorWrap = styled.div``;
const Error = styled.div`
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.5;
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
    cursor: pointer;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    background: url(img/arrow2.png) no-repeat center;
    cursor: pointer;
  }
`;
const TimeWrap = styled.div`
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

const ThirdLine = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const PeopleWrap = styled.div`
  margin-right: 15px;
  input {
    all: unset;
    height: 50px;
    box-sizing: border-box;
    width: 100px;
    border: 1px solid rgba(112, 112, 112, 1);
    padding: 0 20px;
  }
`;

const CountWrap = styled.div`
  display: flex;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(112, 112, 112, 1);
  cursor: pointer;
`;
const OrderWrap = styled.div`
  input {
    all: unset;
    width: 375px;
    height: 50px;
    border: 1px solid rgba(112, 112, 112, 1);
    padding: 0 20px;
  }
`;

const CheckWrap = styled.div`
  display: flex;
`;
const Check = styled.div`
  opacity: 0.8;
`;
const Button = styled.button`
  margin-top: 30px;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  transition: 0.5s;
  color: white;
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
  const [people, setPeople] = useState(1);
  const [namedata, setNamedata] = useState("");
  const [phonedata, setPhonedata] = useState("");
  const [placedata, setPlacedata] = useState("");
  const [datedata, setDatedata] = useState("");
  const [timedata, setTimedata] = useState("");
  const [peopledata, setPeopledata] = useState("");
  const [orderdata, setOrderdata] = useState("");
  const [popup, setPopup] = useState("none");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  let today = new Date();
  let mintoday = `${today.getFullYear()}-${
    today.getMonth() + 1 > 9
      ? today.getMonth() + 1
      : "0" + `${today.getMonth() + 1}`
  }-${today.getDate() > 9 ? today.getDate() : "0" + `${today.getDate()}`}`;

  const submit = () => {
    const { name, phone, place, date, time, peoplecount, order, check } =
      getValues();

    setNamedata(name);
    setPhonedata(phone);
    setPlacedata(place);
    setDatedata(date);
    setTimedata(time);
    setPeopledata(people);
    setOrderdata(order);
    setPopup("block");
  };
  return (
    <Section>
      <LeftCon>
        <Title>RESERVE</Title>
        <form onSubmit={handleSubmit(submit)}>
          <FirstLine>
            <ErrorWrap>
              <NameWrap>
                <Name>이름</Name>
                <input
                  {...register("name", {
                    required: "예약자 성명은 필수 입니다.",
                    pattern: {
                      value: /^[가-힣\s]+$/,
                      message: "성명을 확인해주세요.",
                    },
                    onChange() {},
                  })}
                ></input>
              </NameWrap>
              <Error>{errors?.name?.message}</Error>
            </ErrorWrap>
            <ErrorWrap>
              <PhWrap>
                <Ph>휴대폰</Ph>
                <input
                  {...register("phone", {
                    required: "휴대폰 번호는 필수 입니다.",
                    pattern: {
                      value: /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/,
                      message: "휴대폰번호를 확인해주세요.",
                    },
                    onChange() {},
                  })}
                ></input>
              </PhWrap>
              <Error>{errors?.phone?.message}</Error>
            </ErrorWrap>
          </FirstLine>
          <SecondLine>
            <ErrorWrap>
              <PlaceWrap>
                <Menu>매장</Menu>
                <select
                  {...register("place", { required: "매장선택은 필수입니다." })}
                >
                  <option value=""></option>
                  <option value="해운대점">해운대점</option>
                  <option value="광안점">광안점</option>
                  <option value="도곡역점">도곡역점</option>
                  <option value="대구 수성교점">대구 수성교점</option>
                </select>
              </PlaceWrap>
              <Error>{errors?.place?.message}</Error>
            </ErrorWrap>
            <ErrorWrap>
              <DateWrap>
                <Menu>날짜</Menu>
                <input
                  {...register("date", { required: "날짜는 필수입니다." })}
                  type="date"
                  min={mintoday}
                ></input>
              </DateWrap>
              <Error>{errors?.date?.message}</Error>
            </ErrorWrap>
            <ErrorWrap>
              <TimeWrap>
                <Menu>시간</Menu>
                <select
                  {...register("time", { required: "예약 시간은 필수입니다." })}
                >
                  <option value=""></option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                </select>
              </TimeWrap>
              <Error>{errors?.time?.message}</Error>
            </ErrorWrap>
          </SecondLine>
          <ThirdLine>
            <PeopleWrap>
              <Menu>인원수</Menu>
              <CountWrap>
                <Count
                  onClick={() => {
                    if (people > 1) {
                      setPeople(people - 1);
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Count>
                <input
                  {...register("peoplecount")}
                  style={{
                    textAlign: "center",
                    padding: 0,
                    fontSize: "20px",
                  }}
                  value={people}
                ></input>
                <Count
                  onClick={() => {
                    setPeople(people + 1);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Count>
              </CountWrap>
            </PeopleWrap>
            <OrderWrap>
              <Menu>요청사항</Menu>
              <input {...register("order")}></input>
            </OrderWrap>
          </ThirdLine>
          <CheckWrap>
            <input
              {...register("check", {
                required: "개인정보 수집 미동의시 예약 불가합니다.",
              })}
              type="checkbox"
            ></input>
            <Check>개인 정보수집에 동의 합니다.</Check>
          </CheckWrap>
          <Error>{errors?.check?.message}</Error>

          <Button
            style={{
              backgroundColor: `${
                isValid ? `${mainstyle.mainColor}` : "transparent"
              }`,
              border: `${
                isValid
                  ? `${mainstyle.mainColor}`
                  : "1px solid rgba(112, 112, 112, 1)"
              }`,
              cursor: `${isValid ? `pointer` : "auto"}`,
            }}
          >
            예약하기
          </Button>
        </form>
      </LeftCon>
      <Img>
        <ImgCover />
      </Img>
      <Section4Popup
        namedata={namedata}
        phonedata={phonedata}
        placedata={placedata}
        datedata={datedata}
        timedata={timedata}
        peopledata={peopledata}
        orderdata={orderdata}
        popup={popup}
      />
    </Section>
  );
};
