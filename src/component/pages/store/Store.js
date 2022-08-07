import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const storeDb = [
  {
    id: 0,
    type: "VIPS ORIGINAL",
    title: "광안점",
    add: "부산 광역시 수영구광안해변로 11",
    tel: "051-627-0997",
  },
  {
    id: 1,
    type: "VIPS ORIGINAL",
    title: "센텀시티홈플러스점",
    add: "부산 광역시 해운대구 센텀동로 6 1499 홈플러스 센텀시티점",
    tel: "051-749-8997",
  },
  {
    id: 2,
    type: "VIPS TASTE UP PLUS",
    title: "도곡역점",
    add: "서울특별시 강남구 남부순환로 2912 지하1층 (그랑프리엔상가)",
    tel: "02-569-1997",
  },
  {
    id: 3,
    type: "VIPS PREMIER",
    title: "대구 수성교점",
    add: "대구광역시 중구달구벌대로 223223필지 대구 중구 대봉동 1-1",
    tel: "053-427-2997",
  },
];

const Banner = styled.div`
  width: 100%;
  height: 820px;
  background-color: black;
  background-image: url(img/storeimg.png);
  position: relative;
  top: -120px;
  left: 0;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    margin-top: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      all: unset;
      box-sizing: border-box;
      width: 520px;
      height: 60px;
      background-color: white;
      padding: 20px;
      color: #888;
    }
    button {
      width: 80px;
      height: 60px;
      background-color: #e22331;
      font-size: 18px;
      color: white;
      font-weight: 500;
      border: none;
      cursor: pointer;
    }
  }
`;

const Des = styled.div`
  font-size: 24px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
`;

const Title = styled.div`
  font-size: 76px;
  font-weight: 500;
`;

const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
`;
const Con = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  text-align: center;
  padding-bottom: 60px;
  border-bottom: 1px solid #707070;
  &:first-child {
    padding-bottom: 30px;
  }
`;
const Type = styled.h3`
  width: 20%;
  font-size: 24px;
  font-weight: 500;
`;
const STitle = styled.h3`
  width: 20%;
  font-size: 18px;
  font-weight: 500;
`;
const Add = styled.p`
  width: 40%;
  font-size: 18px;
  font-family: 300;
`;
const Tel = styled.div`
  width: 20%;
  font-size: 18px;
  font-family: 300;
  span {
    margin-left: 20px;
  }
`;

export const Store = () => {
  const [searchData, setSearchData] = useState(storeDb);
  const { register, handleSubmit, getValues } = useForm({
    mode: "onchange",
  });

  const onsubmit = () => {
    const { search } = getValues();
    const serchDb = storeDb.filter((a) => a.add.includes(search));
    setSearchData(serchDb);
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };
  console.log(searchData);
  return (
    <div>
      <Banner>
        <Bg>
          <Des>우리동네에서 가장 가까운 빕스 매장은?</Des>
          <Title>VIPS STORE</Title>
          <form onSubmit={handleSubmit(onsubmit)}>
            <input
              {...register("search", {})}
              type="text"
              placeholder="매장명을 입력해주세요."
            />
            <button>검색</button>
          </form>
        </Bg>
      </Banner>
      <ConWrap>
        <Con>
          <Type>매장 TYPE</Type>
          <STitle>매장명</STitle>
          <Add>주 소</Add>
          <Tel>전화 번호</Tel>
        </Con>
        {searchData.map((term) => (
          <Con>
            <Type>{term.type}</Type>
            <STitle>{term.title}</STitle>
            <Add>{term.add}</Add>
            <Tel>
              <FontAwesomeIcon icon={faPhone} />
              <span>{term.tel}</span>
            </Tel>
          </Con>
        ))}
      </ConWrap>
    </div>
  );
};
