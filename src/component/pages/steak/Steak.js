import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { PageTitle } from "../../PageTitle";
import { steakDb1, steakDb2, steakDb3 } from "./steakDb";
import { SteakSection1 } from "./SteakSection1";
import { SteakSection2 } from "./SteakSection2";
import { SteakSection3 } from "./SteakSection3";

export const Steak = () => {
  return (
    <>
      <PageTitle title={"Enjoy Steak"} />
      <ScrollTop />
      <Container>
        <SteakSection1 />
        <SteakSection2 />
        <SteakSection3 db={steakDb1} />
        <SteakSection3 db={steakDb2} />
        <SteakSection3 db={steakDb3} />
      </Container>
    </>
  );
};
