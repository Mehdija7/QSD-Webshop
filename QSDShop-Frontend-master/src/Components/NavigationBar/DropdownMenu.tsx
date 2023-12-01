import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./NavigationBar.module.css";
import avatar from "../../Images/avatar.png";
import FunctionContext from "../FunctionTheme/FunctionTheme";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../Context/LanguageSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, AuthContextProps, User } from "../../Context/AuthContext";
import { getUser, logout } from "../../Api/Service";

export const getUserLocal = (): User | null => {
  const user = localStorage.getItem("userInfo");
  return user ? JSON.parse(user) : null;
};

export const userRole = () => {
  const user = getUserLocal();
  return user?.roles_id;
};

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const dropdownClassName = isOpen
    ? styles.userDropdownOpen
    : styles.userDropdownClosed;
  const token = localStorage.getItem("token");

  const user = getUserLocal();

  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as any)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <div className="dropdownContent" ref={menuRef}>
      <button className={styles.avatar} onClick={toggleDropdown}>
        <img className={styles.avatar_img} src={avatar} alt=""></img>
      </button>
      <div className={dropdownClassName}>
        {isOpen && (
          <>
            {token && token !== "" && token !== "undefined" ? (
              <>
                <div className={styles.account}>
                  <p className={styles.title}>{t("Account")}</p>
                  <div className={styles.accountInfo}>
                    <img src={avatar} alt="avatar"></img>
                    <div>
                      <p className={styles.name}>
                        {user?.name + " " + user?.surname}
                      </p>
                      <p className={styles.email}>{user?.email}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.settings}>
                  <p className={styles.title}>{t("Settings")}</p>
                  <p className={styles.settingsItem}>{t("PersonalSettings")}</p>
                  <div>
                    <div className={styles.lngContainer}>
                      <LanguageSwitcher></LanguageSwitcher>
                    </div>
                    <p className={styles.settingsItem}>{t("FAQ")}</p>
                  </div>
                  <div className={styles.settingsItem}>
                    <FunctionContext />
                  </div>
                </div>
                {user?.roles_id === 2 && (
                  <div>
                    <button className={styles.adminPanel}>
                      <Link to="/admin">{t("AdminPanel")}</Link>
                    </button>
                  </div>
                )}
                {user?.roles_id === 3 && (
                  <div>
                    <button className={styles.adminPanel}>
                      <Link to="/admin">{t("SuperAdminPanel")}</Link>
                    </button>
                  </div>
                )}
                <button
                  onClick={() => handleLogout()}
                  className={styles.logOut}
                >
                  <p>{t("LogOut")}</p>
                </button>
              </>
            ) : (
              <>
                <div className={styles.settings}>
                  <p className={styles.title}>{t("Settings")}</p>
                  <div>
                    <div className={styles.lngContainer}>
                      <LanguageSwitcher></LanguageSwitcher>
                    </div>
                    <p className={styles.settingsItem}>{t("FAQ")}</p>
                  </div>
                  <div className={styles.settingsItem}>
                    <FunctionContext />
                  </div>
                </div>
                <div>
                  <button className={styles.signIn}>
                    <p>
                      <Link to={"/login"}>{t("SignIn")}</Link>
                    </p>
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
