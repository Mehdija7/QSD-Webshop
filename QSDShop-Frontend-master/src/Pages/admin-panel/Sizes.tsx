import { useTranslation } from "react-i18next";

const Sizes: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t("Sizes")}</h1>;
};
export default Sizes;
