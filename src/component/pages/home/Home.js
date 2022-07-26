import { Container } from "../../Container";
import { MainBanner } from "./MainBanner";
import { Section1 } from "./Section1";
import { Section2 } from "./Section2";

export const Home = () => {
  return (
    <Container>
      <MainBanner />
      <Section1 />
      <Section2 />
    </Container>
  );
};
