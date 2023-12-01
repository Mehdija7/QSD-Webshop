import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import bo from "./languages/bo.json";
import cr from "./languages/cr.json";
import se from "./languages/se.json";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    bo: {
      translation: bo,
    },
    cr: {
      translation: cr,
    },
    se: {
      translation: se,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18n;
