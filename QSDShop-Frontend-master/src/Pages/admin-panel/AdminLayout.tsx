import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "./Admin.module.css";
import { ThemeProvider } from "../../Context/ThemeContext";
import Header from "./Header";
import { AuthContext, AuthContextProps } from "../../Context/AuthContext";
import { getUserLocal } from "../../Components/NavigationBar/DropdownMenu";

const AdminLayout = () => {
  const user = getUserLocal();
  return (
    <ThemeProvider>
      <div className={styles.adminContainer}>
        <Sidebar userRole={user?.roles_id} />
        <div className={styles.adminContent}>
          <Header userName={user?.name + " " + user?.surname} />
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AdminLayout;
