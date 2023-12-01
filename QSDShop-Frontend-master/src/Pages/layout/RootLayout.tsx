import { Outlet } from "react-router-dom";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import styles from "./RootLayout.module.css";
import Footer from "../../Components/Footer/Footer";
import { ThemeProvider } from "../../Context/ThemeContext";
import { AuthProvider } from "../../Context/AuthContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <NavigationBar />
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;
