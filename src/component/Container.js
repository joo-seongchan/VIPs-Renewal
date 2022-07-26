import styled from "styled-components";
import { mainstyle } from "../styles/GlobalStyle";

const SContainer = styled.div`
  padding: ${mainstyle.padding};
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
