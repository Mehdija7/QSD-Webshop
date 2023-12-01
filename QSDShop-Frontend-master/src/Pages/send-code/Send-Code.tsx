import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Send-Code.module.css";
import LockIcon from "./LockIcon";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import BackIcon from "../forgot-password/BackIcon";
import { getUser, login } from "../../Api/Service";
import { AuthContext, AuthContextProps } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SendCode = () => {
  const showToast = () => {
    toast.success(t("ToastifyConfirmLogin"));
  };

  const userJSON = localStorage.getItem("user");
  const user = userJSON ? JSON.parse(userJSON) : null;

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setEmail] = useState("");
  const [receivedKey, setReceivedKey] = useState("");
  const { setUser } = useContext<AuthContextProps>(AuthContext);
  let key: any;
  const { t } = useTranslation();

  const location = useLocation();

  const navigate = useNavigate();

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const nextInput = e.target.value;
    key = nextInput;
  };
  const handleConfirmation = async () => {
    try {
      // Call your login function with the received key
      setReceivedKey(key);
      const response = await login(user.email, user.password, parseInt(key));
      const userResponse = await getUser();

      localStorage.setItem("userInfo", JSON.stringify(userResponse?.data[0]));
      showToast();
      // Handle successful confirmation (e.g., redirect, update state, etc.)

      // Redirect to the desired page after successful confirmation
      navigate("/");
    } catch (error) {
      // Handle confirmation error
      console.error("Confirmation failed:", error);
      // Handle the error state, show a message, or redirect to an error page
    }
  };

  return (
    <div className={styles.sendCodeMain}>
      <div className={styles.sendCondeContainer}>
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
        <div className={styles.sendCodeCircle}>
          <LockIcon></LockIcon>
        </div>
        <p className={styles.sendCodeTitle}>{t("TwoFA")} </p>

        <div className={styles.AuthCodeInputContainer}>
          <input onChange={handleFocus}></input>
        </div>

        <p className={styles.sendCode_explanation}>{t("TwoFAtekst")}</p>

        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={handleConfirmation}>
            {t("Confirm")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendCode;
