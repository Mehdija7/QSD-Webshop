import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Images/qsd_logo.png";
import styles from "./NavigationBar.module.css";
import CustomLink from "../Buttons/CustomLink";
import DropdownMenu from "./DropdownMenu";
import ExpandNavbar from "../Buttons/ExpandNavbar/ExpandNavbar";
import Favorites from "../Buttons/Favorites/Favorites";
import Cart from "../Buttons/Cart/Cart";
import { useTranslation } from "react-i18next";
import Search from "../Buttons/Search/Search";

const NavigationBar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isShop = location.pathname.startsWith("/shop");
  return (
    <nav className={styles.nav}>
      <Link to={"/"} className={styles.site_title}>
        <img className={styles.logo} src={logo} alt="QSD SHOP"></img>
      </Link>
      {/* <LanguageSwitcher></LanguageSwitcher> */}
      <div className={styles.searchMenu}>
        <div className={styles.searchBodyContainer}></div>
      </div>
      <div className={styles.navbar_list}>
        <ul>
          <CustomLink to="shop/women">
            <b>{t("Women")}</b>
          </CustomLink>
          <CustomLink to="shop/men">
            <b>{t("Men")}</b>
          </CustomLink>
          <CustomLink to="shop/children">
            <b>{t("Children")}</b>
          </CustomLink>
          <CustomLink to="shop/all">
            <b>{t("All")}</b>
          </CustomLink>
        </ul>
      </div>
      <ExpandNavbar />
      {isShop && <SearchBar />}
      <Favorites />
      <Cart hover />
      <DropdownMenu />
    </nav>
  );
};
const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBarBig}>
      <div className={styles.searchField}>
        <Search />
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search..."
          value={""}
        ></input>
      </div>
    </div>
  );
};

export default NavigationBar;
