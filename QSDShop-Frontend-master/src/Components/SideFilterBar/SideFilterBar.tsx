import { useTranslation } from "react-i18next";
import Filters from "../Filters/Filters";
import styles from "./SideFilterBar.module.css";
import PriceRange from "../PriceRange/PriceRange";
import {
  getSizes,
  getBrands,
  getCategories,
  getColors,
} from "../../Api/Service";
import { useEffect, useState } from "react";
import ResetAll from "../ResetAll/ResetAll";

const SideFilterBar = () => {
  const { t } = useTranslation();
  //SIZES
  const [sizes, setSizes] = useState([]);
  //BRANDS
  const [brands, setBrands] = useState([]);
  //CATEGORY
  const [categories, setCategories] = useState([]);
  //COLORS
  const [colors, setColors] = useState([]);

  useEffect(() => {
    getSizes().then((response) => {
      setSizes(response.data);
    });
    getBrands().then((response: any) => {
      setBrands(response.data);
    });
    getCategories().then((response: any) => {
      setCategories(response.data);
    });
    getColors().then((response: any) => {
      setColors(response.data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Filters headerValue={t("Category")} listItems={categories} />
      <br></br>
      <Filters headerValue={t("Brand")} listItems={brands} />
      <br></br>
      <Filters headerValue={t("Size")} listItems={sizes} />
      <br></br>
      <Filters headerValue={t("Color")} listItems={colors} />
      <br></br>
      <PriceRange />
      <ResetAll />
    </div>
  );
};
export default SideFilterBar;
