import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactImg}>
        <h1>{t("HowCanWeHelp")}</h1>
      </div>
      <div className={styles.contactFormContainer}>
        <h3>{t("ContactDirectly")}</h3>
        <form className={styles.contactForm}>
          <label>{t("FullName")}</label>
          <input type="string" value="" />
          <label>{t("EmailAdress")}</label>
          <input type="string" value="" />
          <label>{t("Topic")}</label>
          <input type="string" value="" />
          <label>{t("Message")}</label>
          <textarea className={styles.contactMessage} name="message"></textarea>
          <button className={styles.contactSubmit} type="submit">
            {t("SendMessage")}
          </button>
        </form>
      </div>
    </div>
  );
}
