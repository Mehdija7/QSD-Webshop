import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";
import FunctionContext from "../../Components/FunctionTheme/FunctionTheme";
import ExpandNavbar from "../../Components/Buttons/ExpandNavbar/ExpandNavbar";
import { useTranslation } from "react-i18next";
import { logout } from "../../Api/Service";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerClassName = isMenuOpen ? styles.headerOpen : styles.headerClosed;
  const location = useLocation();
  const { t } = useTranslation();
  const [pageName, setPageName] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname;
    setPageName(getPageNameFromPath(pathname));
  }, [location.pathname]);

  const getPageNameFromPath = (pathname: string): string => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    if (pathSegments.length > 1) {
      return t(capitalizeFirstLetter(pathSegments[1]));
    }
    return t("Home");
  };
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as any)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <div className={styles.leftContent}>
        <span>{pageName}</span>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.userInfo} onClick={toggleMenu}>
          <span>
            {userName} <ExpandNavbar visible />
          </span>
        </div>
        <div className={headerClassName}>
          {isMenuOpen && (
            <>
              <Link to="/">{t("Home")}</Link>
              <FunctionContext />
              <button className={styles.toggleButton} onClick={handleLogout}>
                {t("LogOut")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
