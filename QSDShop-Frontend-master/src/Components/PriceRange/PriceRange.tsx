import { useTranslation } from "react-i18next";

const PriceRange = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <p>{t("PriceRange")}</p>
        <span> {t("From")} </span>
        <label>
          <input type="number" defaultValue="0" style={{ width: "50px" }} />
        </label>
        <span> {t("To")} </span>
        <label>
          <input type="number" defaultValue="5000" style={{ width: "50px" }} />
        </label>
      </div>
    </>
  );
};
export default PriceRange;
