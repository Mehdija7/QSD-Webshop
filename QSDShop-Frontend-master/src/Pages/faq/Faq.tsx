import styles from "./Faq.module.css";
import { Link } from "react-router-dom";
import Cart from "../../Components/Buttons/Cart/Cart";
import Shipment from "../../Components/Buttons/Shipment";
import Return from "../../Components/Buttons/Return";
import Complaint from "../../Components/Buttons/Complaint";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();
  return (
    <div className={styles.faqContainer}>
      <div className={styles.selectType}>
        <div className={styles.selection}>
          <Cart />
          <h4>{t("Shopping")}</h4>
        </div>
        <div className={styles.selection}>
          <Shipment />
          <h4>{t("Receiving")}</h4>
        </div>
        <div className={styles.selection}>
          <Return />
          <h4>{t("Return")}</h4>
        </div>
        <div className={styles.selection}>
          <Complaint />
          <h4>{t("Complaint")}</h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div></div>
      <div className={styles.info}>
        <p>{t("MissInfo")}</p>
        <p>
          {t("FAQTextPart1")} <a href="mailto:hello@qsd.ba">hello@qsd.ba</a>
          {t("FAQTextPart2")}
          <Link to={"/contact"}>{t("FAQTextPart3")}</Link>
        </p>
      </div>
    </div>
  );
}
