import { ScrollTop } from "../../../ScrollTop";
import { PageTitle } from "../../PageTitle";
import { ReSection1 } from "./ReSection1";
import { ReSection2 } from "./ReSection2";
import { ReSection3 } from "./ReSection3";

export const Reservation = () => {
  return (
    <>
      <PageTitle title={"Reservation"} />
      <ScrollTop />
      <ReSection1 />
      <ReSection2 />
      <ReSection3 />
    </>
  );
};
