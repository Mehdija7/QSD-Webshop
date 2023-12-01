import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Admin.module.css";
import "../../colors.css";
import ArrowRight from "../../Components/Buttons/ArrowRight/ArrowRight";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  userRole: number | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        {userRole === 3 && (
          <Link to="/admin/users" className={styles.sidebarButton}>
            {t("Users")}
          </Link>
        )}
        <Link to="/admin/products" className={styles.sidebarButton}>
          {t("Products")}
        </Link>
        <Link to="/admin/orders" className={styles.sidebarButton}>
          {t("Orders")}
        </Link>
        <Link to="/admin/categories" className={styles.sidebarButton}>
          {t("Categories")}
        </Link>
        <Link to="/admin/brands" className={styles.sidebarButton}>
          {t("Brands")}
        </Link>
        <Link to="/admin/colors" className={styles.sidebarButton}>
          {t("Colors")}
        </Link>
        <Link to="/admin/sizes" className={styles.sidebarButton}>
          {t("Sizes")}
        </Link>

        <div className="toggleButton" onClick={toggleMenu}>
          <ArrowRight isRotated={isMenuOpen} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
