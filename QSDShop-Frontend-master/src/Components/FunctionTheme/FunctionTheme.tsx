import React from "react";
import { useTheme, useThemeUpdate } from "../../Context/ThemeContext";
import styles from "./FunctionTheme.module.css";
import { useTranslation } from "react-i18next";
import LightThemeSVG from "../Buttons/LightThemeSVG";
import DarkThemeSVG from "../Buttons/DarkThemeSVG";

const FunctionContext: React.FC = () => {
  const mode = useTheme();
  const toggleTheme = useThemeUpdate();
  const { t } = useTranslation();

  const handleThemeToggle = () => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("data-theme", mode ? "dark" : "light");
    document.body.classList.toggle("dark", mode);
    toggleTheme();
  };

  return (
    <button className={styles.button} onClick={handleThemeToggle}>
      {!mode ? <DarkThemeSVG /> : <LightThemeSVG />}
      {!mode ? t("Dark") : t("Light")}
    </button>
  );
};

export default FunctionContext;
