import styles from "./Home.module.css";
import { Parallax } from "react-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const images = [
  { image: require("../../Images/CK.jpg") },
  { image: require("../../Images/CK1.jpg") },
  { image: require("../../Images/CK2.jpg") },
  { image: require("../../Images/CK3.jpg") },
  { image: require("../../Images/CK4.jpg") },
];
const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const generateProductCard = (imageSrc: string) => (
    <div className={styles.homeProductProductCard}>
      <div className={styles.homeProductProductImage}>
        <img src={imageSrc} alt="Product" className={styles.homeProductImage} />
        <p className={styles.homeProductPrice1}>10$</p>
        <div className={styles.homeProductAbsoluteDiv}>
          <button className={styles.homeProductButtonBuy}>BUY</button>
        </div>
        <div className={styles.homeProductProductPriceDetails}>
          <div className={styles.homeProductDetails}>
            <div className={styles.homeProductPrice}>
              <p className={styles.homeProductTitle}>CK T-Shirt</p>
              <p className={styles.homeProductCategory}>Category: Tshirts</p>
              <p className={styles.homeProductBrand}>Brand: CK</p>
            </div>
          </div>
          <div className={styles.homeProductAdditional}>
            <button className={styles.homeProductFavorites}></button>
            <div className={styles.homeProductShop}> BUY</div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className={styles.wrapperHome}>
        <div className={styles.content}>
          <div className={styles.imageDiv1}>
            <div className={styles.textDiv}>
              <p className={styles.text1}>{t("IntheMoodForNew")}</p>
              <p className={styles.text2}>{t("Style")}</p>
              <button
                className={styles.shopButton}
                onClick={() => {
                  navigate("/shop/all");
                }}
              >
                {t("ShopNow")}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuPhotos}>
            <div
              className={styles.photo}
              onClick={() => {
                navigate("/shop/women");
              }}
            >
              <div className={styles.shadow}>
                <p>{t("Women")}</p>
              </div>
            </div>
            <div
              className={styles.photo1}
              onClick={() => {
                navigate("/shop/men");
              }}
            >
              <div className={styles.shadow}>
                <p>{t("Men")}</p>
              </div>
            </div>
            <div
              className={styles.photo2}
              onClick={() => {
                navigate("/shop/children");
              }}
            >
              <div className={styles.shadow}>
                <p>{t("Children")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.parallax}>
          <Parallax
            bgImage={require("../../Images/parallexBg.webp")}
            blur={{ min: -1, max: 3 }}
            strength={500}
          >
            <div className={styles.parallaxContent}>
              <div className={styles.parallaxMain}>
                <div className={styles.parallaxCard}>
                  <div className={styles.parallaxCardBorder}>
                    <p className={styles.parallaxTitle}>{t("QSDShop")}</p>
                    <p className={styles.parallaxText}>
                      <span>{t("OurMission")}</span>
                      <br />
                      <br />
                      <br />
                      <span>{t("OurVision")}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
        <div className={styles.newItems}>
          <p className={styles.newItemsText}>{t("NewInThisWeek")}</p>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className={styles.swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              {generateProductCard(image.image)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Home;
