import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FacebookIcon from "../Buttons/FacebookIcon";
import InstagramIcon from "../Buttons/InstagramIcon";
import TwitterIcon from "../Buttons/TwitterIcon";
import LinkedInIcon from "../Buttons/LinkedInIcon";
import TikTokIcon from "../Buttons/TikTokIcon";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.iconsContainer}>
        <div className={styles.Footer_line_left}></div>
        <div className={styles.socialLinks}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <TikTokIcon />
        </div>
        <div className={styles.Footer_line_right}></div>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.leftContent}>
          <p>
            <b>QSD BiH d.o.o</b>
          </p>
          <p>hello@qsd.ba</p>
          <p>Dr. Ante Starčevića bb, Mostar, Bosnia and Herzegovina</p>
          <p>direct +387 36 446 089 (BH)</p>
          <p>USA +1 347 352 8633 (NY)</p>
          <p>UK +44 20 3290 1563 (LND)</p>
        </div>
        <div className={styles.middleContent}>
          <p>{t("CUSTOMERSUPPORT")}</p>
          <p onClick={() => navigate("/faq")} className={styles.navp}>
            {t("FAQ")}
          </p>
          <p onClick={() => navigate("/contact")} className={styles.navp}>
            {t("CONTACTUS")}
          </p>
        </div>
        <div className={styles.rightContent}>
          <p>Legal Agreement</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.bottomLine}></div>
        <p>Copyright © 2023 QSD BH. {t("RIGHTS")}</p>
      </div>
    </footer>
  );
};
export default Footer;
