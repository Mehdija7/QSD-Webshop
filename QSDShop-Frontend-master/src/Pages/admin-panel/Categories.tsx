import { useTranslation } from "react-i18next";

const Categories: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t("Categories")}</h1>;
};
export default Categories;
