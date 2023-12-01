import { Outlet } from "react-router-dom";
import styles from "./RegisterLayout.module.css";
import { useTheme } from "../../Context/ThemeContext";

const RegisterLayout = () => {
  const mode = localStorage.getItem("theme");
  return (
    <div
      data-theme={mode === "dark" ? "dark" : "light"}
      className={styles.image}
    >
      <Outlet />
    </div>
  );
};

export default RegisterLayout;
