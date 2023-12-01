import { useTranslation } from "react-i18next";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Admin.module.css";
import { logout } from "../../Api/Service";
import { userRole } from "../../Components/NavigationBar/DropdownMenu";

const Admin: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentRole = userRole();
  const getButtonTo = () => {
    switch (currentRole) {
      case 2:
        return "/admin/products";
      case 3:
        return "/admin/users";
      default:
        return "/";
    }
  };

  const getButtonLabel = () => {
    switch (currentRole) {
      case 2:
        return "Admin";
      case 3:
        return "SuperAdmin";
      default:
        return "";
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className={styles.adminHome}>
      <div className={styles.buttonsContainer}>
        <Link to={getButtonTo()} className={styles.adminsButton}>
          {getButtonLabel()}
        </Link>
        <button onClick={handleLogout} className={styles.logOutButton}>
          {t("LogOut")}
        </button>
      </div>
    </div>
  );
};

export default Admin;
