import styles from "./Login.module.css";
import img from "../../Images/login-removebg-preview.png";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { login, requestValidationKey } from "../../Api/Service";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextProps } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface User {
  email: string;
  password: string;
  key?: string;
}

const Login = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [key, setKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const showToast = () => {
    toast.success(t("ToastifyLogin"));
  };

  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { setUser } = useContext<AuthContextProps>(AuthContext);

  const isFormValid = () => {
    return isEmailValid(email) && isPasswordValid(password);
  };

  const isEmailValid = (email: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password: any) => {
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[.$!%*?&])[A-Za-z\d.$!%*?&]{8,}$/.test(
      password
    );
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

  const handlePasswordChange = (e: any) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    if (!isPasswordValid(inputValue)) {
      setPasswordError(t("ErrPw") as string);
    } else {
      setPasswordError("");
    }
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      // Handle successful login (e.g., redirect, update state, etc.)
      setUser(response?.data?.user);
      const userData: User = {
        email: email,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      showToast();
      navigate("/send-code");
    } catch (error) {
      // Handle login error
      setError("Login failed. Please check your credentials.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.loginMain}>
      <div className={styles.loginContainer}>
        <img className={styles.loginImg} src={img} alt="Login" />
        <form className={styles.loginUserDetailsField} onSubmit={handleLogin}>
          <input
            className={styles.loginEmail}
            type="email"
            placeholder={t("Email") || ""}
            value={email}
            onChange={(e) => handleEmailChange(e)}
            required
          />
          {emailError && <div className={styles.error}>{emailError}</div>}

          <div className={styles.loginPw}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder={t("Šifra") || ""}
              value={password}
              className={styles.loginInputPw}
              onChange={(e) => handlePasswordChange(e)}
              required
            />
            {passwordError && (
              <div className={styles.error}>{passwordError}</div>
            )}
            <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>
          <button className={styles.buttonLogin} disabled={!isFormValid()}>
            {t("Login")}
          </button>
        </form>
        <div className={styles.loginInfo}>
          <Link style={{ textDecoration: "none" }} to="/registration">
            {t("Register")}
          </Link>
          <Link style={{ textDecoration: "none" }} to="/forgot-password">
            {t("ForgotPassword")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
