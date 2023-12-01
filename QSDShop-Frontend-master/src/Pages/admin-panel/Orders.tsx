import { useTranslation } from "react-i18next";

const Orders: React.FC = () => {
  const { t } = useTranslation();

  return <h1>{t("Orders")}</h1>;
};
export default Orders;
