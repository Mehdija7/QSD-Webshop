import styles from "./Forgot-Password.module.css";
import slika from "../../Images/forgotPassword.png";
import BackIcon from "./BackIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { requestValidationKey } from "../../Api/Service";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const isEmailValid = (email: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    // Odmah provjeri ispravnost e-maila
    if (!isEmailValid(inputValue)) {
      setEmailError(t("ErrEmail") as string);
    } else {
      setEmailError("");
    }
  };
  const handleRequestKey = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await requestValidationKey(email);
      navigate("/reset-password");
    } catch (error) {
      // Handle request key error
      setError("Request key failed. Please check your email.");
      console.error("Request key failed:", error);
    }
  };

  return (
    <div className={styles.forgotPasswordMain}>
      <div className={styles.forgotPasswordContainer}>
        <div className={styles.goBackButtonContainer}>
          <Link to="/login">
            <button className={styles.goBackButton}>
              <BackIcon></BackIcon>
            </button>
          </Link>
        </div>
        <img className={styles.image} src={slika} alt="" />
        <form className={styles.inputEmail} onSubmit={handleRequestKey}>
          <div className={styles.userDetailsField}>
            <input
              className={styles.userDetailsFieldInput}
              type="text"
              placeholder={t("EmailAdress") || ""}
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className={styles.error}>{emailError}</div>}
          </div>

          <div className={styles.forgotPasswordField}>
            <button
              className={styles.forgotPasswordButton}
              disabled={!isEmailValid(email)}
            >
              {t("SendEmail")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
