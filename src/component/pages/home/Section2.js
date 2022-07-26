import styled from "styled-components";

const Section = styled.div`
  width: 100%;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TextWrap = styled.div`
  padding-top: 70px;
  max-width: 550px;
`;
const Title = styled.div`
  font-size: 62px;
  font-weight: 600;
  margin-bottom: 50px;
`;
const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgba(172, 170, 170, 1);
  line-height: 40px;
  span {
    color: white;
    font-weight: 700;
  }
  margin-bottom: 30px;
`;
const NavWrap = styled.div`
  padding-top: 35px;
  font-size: 20px;
  font-weight: 400;
  opacity: 0.8;
`;

const Circle = styled.div`
  width: 285px;
  height: 285px;
  background: url(img/circle.png) no-repeat center/cover;
  position: relative;
  top: -80px;
  left: 140px;
`;

const ImgWrap = styled.div`
  width: 60%;
  height: 750px;
  background: url(img/restaurant1.png) no-repeat center/cover;
`;

const ImgCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 40px 60px 65px 90px;
`;
const Img = styled.div`
  width: 100%;
  height: 100%;
  background: url(img/restaurant1.png) no-repeat center/cover;
`;

export const Section2 = () => {
  return (
    <Section>
      <ConWrap>
        <TextWrap>
          <Title>VIPS BENEFIT</Title>
          <SubTitle>
            <span>생일 축하 쿠폰</span> - 설정된 생일 정보를 확인하세요! 1년
            1회, 1만원 할인 쿠폰 증정
          </SubTitle>
          <SubTitle>
            <span>보너스포인트 추가</span> - 매월 CJ ONE 제휴 브랜드 4개 이용시
            50%5개 이용시 100% 추가 포인트 적립
          </SubTitle>
          <SubTitle>
            <span>포인트 적립</span> - CJ ONE 포인트 0.5% 작립 제휴 및 할인 시
            0.5% 적립
          </SubTitle>
          <SubTitle>
            <span>포인트 선물하기</span> - 가족, 친구에게 포인트 선물하고 행복을
            나누세요
          </SubTitle>
          <SubTitle>
            <span>포인트 사용</span> - 1,000포인트 이상 보유 시, 10포인트 단위
            현금처럼 사용
          </SubTitle>
          <NavWrap>
            맛있고 저렴하게 빕스를 즐기는 방법! 제휴/할인 카드를 확인하세요
            <Circle></Circle>
          </NavWrap>
        </TextWrap>
        <ImgWrap>
          <ImgCover>
            <Img />
          </ImgCover>
        </ImgWrap>
      </ConWrap>
    </Section>
  );
};
