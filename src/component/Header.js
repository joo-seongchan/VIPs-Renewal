import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.div`
  padding: 30px 30px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 50px;
  display: flex;
  align-items: center;
`;

const MenuWrap = styled.ul`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Menu = styled.li`
  margin-right: 45px;
  a {
    font-size: 18px;
    font-weight: 700;
  }
`;
const LogoWrap = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    width: 100%;
    height: 80%;
  }
`;
const Logo = styled.img`
  width: 175px;
  height: 65px;
  border-radius: 50%;
`;
const ClientMenuWrap = styled.ul`
  width: 45%;
  height: 100%;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: right;
`;
const ClientMenu = styled.li`
  margin-left: 20px;
  a {
    font-size: 16px;
    font-weight: 700;
    opacity: 0.7;
  }
`;
const SignUpMenu = styled.div`
  margin-left: 55px;
  width: 125px;
  height: 50px;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff0de;
    color: #555;
    font-weight: 900;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Wrap>
        <MenuWrap>
          <Menu>
            <Link to="/steak">ENJOYSTEAKS</Link>
          </Menu>
          <Menu>
            <Link to="/saladbar">SALAD BAR</Link>
          </Menu>
          <Menu>
            <Link to="/store">STORE</Link>
          </Menu>
          <Menu>
            <Link to="/benefit">BENEFIT</Link>
          </Menu>
          <Menu>
            <Link to="/reservation">RESERVATION</Link>
          </Menu>
        </MenuWrap>
        <LogoWrap>
          <Link to="/">
            <Logo src="img/Logo.png" />
          </Link>
        </LogoWrap>
        <ClientMenuWrap>
          <ClientMenu>
            <Link to="#">고객의소리</Link>
          </ClientMenu>
          <ClientMenu>
            <Link to="#">채용</Link>
          </ClientMenu>
          <ClientMenu>
            <Link to="#">로그인</Link>
          </ClientMenu>
          <SignUpMenu>
            <Link to="#">회원가입</Link>
          </SignUpMenu>
        </ClientMenuWrap>
      </Wrap>
    </Sheader>
  );
};
