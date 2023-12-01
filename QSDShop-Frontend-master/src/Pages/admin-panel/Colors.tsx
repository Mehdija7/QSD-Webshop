import { useTranslation } from "react-i18next";

const Colors: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t("Colors")}</h1>;
};
export default Colors;
