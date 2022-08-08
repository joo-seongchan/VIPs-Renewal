import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SFooter = styled.div`
  padding: 0 30px;
  min-width: 1800px;
`;
const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
`;
const Copy = styled.div`
  width: 43%;
  height: 100%;
  border: 1px solid rgba(112, 112, 112, 0.5);
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
const Icon = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border: 1px solid rgba(112, 112, 112, 0.5);
`;
const Compony = styled.div`
  width: 43%;
  height: 100%;
  border: 1px solid rgba(112, 112, 112, 0.5);
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 30px;
`;

export const Footer = () => {
  let date = new Date();
  return (
    <SFooter>
      <Wrap>
        <Copy>ⓒ {date.getFullYear()} 주성찬,양수영</Copy>
        <Icon>
          <FontAwesomeIcon icon={faFacebookF} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faTwitter} />
        </Icon>
        <Compony>CJ 푸드빌</Compony>
      </Wrap>
    </SFooter>
  );
};
