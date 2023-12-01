import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import LockIcon from "../send-code/LockIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEye, FiEyeOff } from "react-icons/fi";
import BackIcon from "../forgot-password/BackIcon";
import { resetPassword } from "../../Api/Service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ResetPassword = () => {
  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;
  const showToast = () => {
    toast.success(t("ToastifyResetPw"));
  };
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setEmail] = useState("");
  const [receivedKey, setReceivedKey] = useState("");

  let key: any;
  const { t } = useTranslation();

  const [passwordError, setPasswordError] = useState("");
  const [passwordError2, setPasswordError2] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const isPasswordValid = (password: string) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.$!%*?&])[A-Za-z\d.$!%*?&]{8,}$/.test(
      password
    );
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  const isPasswordSame = (password: string, password2: string) => {
    return password === password2;
  };
  const isFormValid = () => {
    return (
      isPasswordSame(password, password2) &&
      password !== "" &&
      password2 !== "" &&
      isPasswordValid(password) &&
      receivedKey !== "" &&
      receivedKey.length === 6
    );
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const key = e.target.value;
    setReceivedKey(key); // Update the key state
  };

  const handleConfirmation = async () => {
    try {
      // Call your login function with the received key
      const response = await resetPassword(
        password,
        password2,
        receivedKey, // Use the updated receivedKey state
        user.email
      );
      showToast();
      navigate("/login");
    } catch (error) {
      // Handle confirmation error
      console.error("Confirmation failed:", error);
      // Handle the error state, show a message, or redirect to an error page
    }
  };

  return (
    <div className={styles.resetCodeMain}>
      <div className={styles.resetCondeContainer}>
        <div className={styles.goBackField}>
          <button
            className={styles.goBackButton}
            onClick={() => {
              if (location.state?.from) {
                navigate(location.state.from);
              } else {
                navigate(-1);
              }
            }}
          >
            <BackIcon></BackIcon>
          </button>
        </div>
        <div className={styles.resetCodeCircle}>
          <LockIcon></LockIcon>
        </div>
        <p className={styles.resetCodeTitle}>{t("TwoFA")} </p>

        <div className={styles.AuthCodeInputContainer}>
          <input value={receivedKey} onChange={handleFocus}></input>
        </div>

        <p className={styles.resetCode_explanation}>{t("TwoFAtekst")}</p>

        <div className={styles.userDetailsField}>
          <div className={styles.signUpPw}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("Šifra") || ""}
              value={password}
              className={styles.signUpInput}
              onChange={(e) => {
                const inputValue = e.target.value;
                setPassword(inputValue);
                if (!isPasswordValid(inputValue)) {
                  setPasswordError(t("ErrPw") as string);
                } else {
                  setPasswordError("");
                }
              }}
            />
            {passwordError && (
              <div className={styles.error}>{passwordError}</div>
            )}

            <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>

          <div className={styles.signUpPw2}>
            <input
              type={showPassword2 ? "text" : "password"}
              placeholder={t("ConfirmPassword") || ""}
              value={password2}
              className={styles.signUpInput}
              onChange={(e) => {
                const inputValue = e.target.value;
                setPassword2(inputValue);
                if (!isPasswordValid(inputValue)) {
                  setPasswordError2(t("ErrPwRepeat") as string);
                } else {
                  setPasswordError2("");
                }
              }}
            />
            {passwordError2 && (
              <div className={styles.error}>{passwordError2}</div>
            )}
            <span
              onClick={togglePasswordVisibility2}
              className={styles.eyeIcon2}
            >
              {showPassword2 ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.confirmButton}
            disabled={!isFormValid()}
            onClick={handleConfirmation}
          >
            {t("Confirm")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
