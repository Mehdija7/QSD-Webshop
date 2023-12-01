import styles from "./Registration.module.css";
import img from "../../Images/avatar-removebg-preview.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { register } from "../../Api/Service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const showToast = () => {
    toast.success(t("ToastifyRegistration"));
  };
  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password2, setPassword2] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordError2, setPasswordError2] = useState("");

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const isFormValid = () => {
    return (
      isEmailValid(email) &&
      isPasswordValid(password) &&
      password === password2 &&
      firstName !== "" &&
      lastName !== ""
    );
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password: string) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.$!%*?&])[A-Za-z\d.$!%*?&]{8,}$/.test(
      password
    );
  };
  const handleFirstName = (e: any) => {
    const inputValue = e.target.value;
    setFirstName(inputValue);
    if (inputValue === "") {
      setFirstNameError(t("ErrEmptyField") as string);
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e: any) => {
    const inputValue = e.target.value;
    setLastName(inputValue);
    if (inputValue === "") {
      setLastNameError(t("ErrEmptyField") as string);
    } else {
      setLastNameError("");
    }
  };

  const handleEmailChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (!isEmailValid(inputValue)) {
      setEmailError(t("ErrEmail") as string);
    } else {
      setEmailError("");
    }
  };
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register(
        firstName,
        lastName,
        email,
        password,
        password2
      );
      showToast();
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Check your credentials");
      console.error("Registration failed", error);
    }
  };

  return (
    <div className={styles.signUpMain}>
      <div className={styles.signUpContainer}>
        <div>
          <img className={styles.signUpImg} src={img} />
        </div>
        <form className={styles.registrationForm} onSubmit={handleRegister}>
          <div className={styles.signUpNameField}>
            <div className={styles.signUpNameField1}>
              <input
                className={styles.signUpFirstName}
                type="text"
                placeholder={t("FirstName") || ""}
                value={firstName}
                onChange={handleFirstName}
              />
              {firstNameError && (
                <div className={styles.error}>{firstNameError}</div>
              )}
            </div>

            <div className={styles.signUpNameField2}>
              <input
                className={styles.signUpLastName}
                type="text"
                placeholder={t("LastName") || ""}
                value={lastName}
                onChange={handleLastName}
              />
              {lastNameError && (
                <div className={styles.error}>{lastNameError}</div>
              )}
            </div>
          </div>

          <div className={styles.signUpUserDetails}>
            <input
              className={styles.signUpInput}
              type="text"
              placeholder={t("Email") || ""}
              onChange={handleEmailChange}
            />
            {emailError && <div className={styles.error}>{emailError}</div>}

            <div className={styles.signUpPw}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("Password") || ""}
                value={password}
                className={styles.signUpInput}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setPassword(inputValue);
                  if (!isPasswordValid(inputValue)) {
                    setPasswordError(t("ErrPw") as string);
                  } else {
                    setPasswordError("");
                    // Handle successful login, e.g., make an API request
                  }
                }}
              />
              {passwordError && (
                <div className={styles.error}>{passwordError}</div>
              )}

              <span
                onClick={togglePasswordVisibility}
                className={styles.eyeIcon}
              >
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
                    // Handle successful login, e.g., make an API request
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
            <button className={styles.signUpButton} disabled={!isFormValid()}>
              {t("Register")}
            </button>
            <div className={styles.loginButton}>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/login"
              >
                {t("Login")}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
