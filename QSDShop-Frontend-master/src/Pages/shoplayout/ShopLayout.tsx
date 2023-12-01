import SideFilterBar from "../../Components/SideFilterBar/SideFilterBar";
import { Outlet } from "react-router-dom";
import styles from "./ShopLayout.module.css";

const ShopLayout = () => {
  return (
    <>
      <div className={styles.main}>
        <SideFilterBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default ShopLayout;
