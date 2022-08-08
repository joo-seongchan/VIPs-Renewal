import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { PageTitle } from "../../PageTitle";
import { MainBanner } from "./MainBanner";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { Section4 } from "./Section4";
import { Section5 } from "./Section5";

export const Home = () => {
  return (
    <>
      <PageTitle title={"Home"} />
      <ScrollTop />
      <Container>
        <MainBanner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section4 />
      </Container>
    </>
  );
};
