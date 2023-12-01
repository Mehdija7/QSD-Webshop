import { useTranslation } from "react-i18next";

const Brands: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t("Brands")}</h1>;
};
export default Brands;
