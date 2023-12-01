import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getProducts } from "../../Api/Service";
import styles from "./Admin.module.css";
import dayjs from "dayjs";

interface Product {
  id: number;
  name: string;
  created_at: Date;
  color: string;
}

const Products: React.FC = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await getProducts();


        // Adjust the following conditions based on the actual structure
        if (response.data && response.data.data) {
          if (Array.isArray(response.data.data)) {
            setProducts(response.data.data);
          } else {
            console.error("Products is not an array:", response.data.data);
          }
        } else {
          console.error("Unexpected data structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableTr}>
            <th>{t("ID")}</th>
            <th>{t("Name")}</th>
            <th>{t("CreatedAt")}</th>
            <th>{t("Color")}</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{dayjs(product.created_at).toString()}</td>
              <td>{product.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
