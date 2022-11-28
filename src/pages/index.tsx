import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const commonTitle = t("common:title");
  const homeTitle = t("home:title");

  return (
    <>
      <div>{commonTitle}</div>
      <div>{homeTitle}</div>
    </>
  );
};

export default Home;
