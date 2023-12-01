import styles from "./ProductGrid.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import StarIcon from "../Buttons/StarIcon";

const ProductGrid = (props: any) => {
  const { t } = useTranslation();
  const mode = props.colorValue;
  const navigate = useNavigate();
  const buttonStyle: React.CSSProperties = {
    backgroundColor: mode,
  };
  const priceStyle: React.CSSProperties = {
    color: mode,
  };
  return (
    <>
      <div
        className={styles.productGridContainer}
        onClick={() => {
          navigate(`../../product-detail/${props.product.id}`);
        }}
      >
        <div className={styles.productItem}>
          <div className={styles.imageContainer}>
            <img
              src={props.product.images[0].link}
              alt="majica"
              className={styles.productImage}
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.text}>
              <h3 className={styles.productTitle}>{props.product.name}</h3>
              <h4 className={styles.productBrand}>
                {props.product.brand.name}
              </h4>
            </div>
            <h4 className={styles.productPrice} style={priceStyle}>
              ${props.product.price}
            </h4>
          </div>
        </div>
        <div className={styles.productReview}>
          <span>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
          </span>
        </div>
        <button className={styles.productButton} style={buttonStyle}>
          {t("AddToCart")}
        </button>
      </div>
    </>
  );
};
export default ProductGrid;
