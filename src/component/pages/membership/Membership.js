import styled from "styled-components";
import { ScrollTop } from "../../../ScrollTop";
import { mainstyle } from "../../../styles/GlobalStyle";
import { Container } from "../../Container";
import { PageTitle } from "../../PageTitle";
import { MemBanner } from "./MemBanner";
import { MemSection1 } from "./MemSection1";
import { MemSection2 } from "./MemSection2";
import { MemSection3 } from "./MemSection3";

export const Membership = () => {
  return (
    <>
      <PageTitle title={"MemberShip"} />
      <ScrollTop />
      <MemBanner />
      <Container>
        <MemSection1 />
        <MemSection2 />
        <MemSection3 />
      </Container>
    </>
  );
};
