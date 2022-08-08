import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { PageTitle } from "../../PageTitle";
import { SaladSection1 } from "./SaladSection1";
import { SaladSection2 } from "./SaladSection2";
import { SaladSection3 } from "./SaladSection3";
import { SaladSection4 } from "./SaladSection4";
import { SaladSection5 } from "./SaladSection5";
import { SaladSection6 } from "./SaladSection6";
import { SaladSection7 } from "./SaladSection7";
import { SaladSection8 } from "./SaladSection8";

export const Saladbar = () => {
  return (
    <>
      <PageTitle title={"Salad bar"} />
      <ScrollTop />
      <Container>
        <SaladSection1 />
        <SaladSection2 />
      </Container>
      <SaladSection3 />
      <SaladSection4 />
      <SaladSection5 />
      <SaladSection6 />
      <SaladSection7 />
      <SaladSection8 />
    </>
  );
};
