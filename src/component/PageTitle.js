import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>VIPS | {title}</title>
    </Helmet>
  );
};
