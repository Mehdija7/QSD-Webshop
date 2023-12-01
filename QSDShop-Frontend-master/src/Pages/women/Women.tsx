import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import styles from "./Women.module.css";
import { useTranslation } from "react-i18next";
import { getProductsWomen } from "../../Api/Service";
import { useState, useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  price: string;
  gender: string;
  created_at: string | null;
  updated_at: string | null;
  colors_id: number;
  brands_id: number;
  total_rating: number;
  avg_rating: number;
  description: string;
  color: {
    id: number;
    name: string;
    hex_code: string | null;
    created_at: string | null;
    updated_at: string | null;
  };
  brand: {
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
  };
  sizes: Array<{
    id: number;
    size: string;
    created_at: string | null;
    updated_at: string | null;
  }>;

  images: Array<{
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
    products_id: number;
    link: string;
  }>;
}

const Women = () => {
  const exampleProducts: Product[] = [
    {
      id: 1,
      name: "",
      price: "",
      gender: "",
      created_at: null,
      updated_at: null,
      colors_id: 1,
      brands_id: 2,
      total_rating: 0,
      avg_rating: 0,
      description: "",
      color: {
        id: 1,
        name: "",
        hex_code: null,
        created_at: null,
        updated_at: null,
      },
      brand: {
        id: 2,
        name: "",
        created_at: null,
        updated_at: null,
      },
      sizes: [
        {
          id: 1,
          size: "",
          created_at: null,
          updated_at: null,
        },
      ],
      images: [
        {
          id: 1,
          name: "",
          created_at: null,
          updated_at: null,
          products_id: 1,
          link: "",
        },
      ],
    },
  ];
  const { t } = useTranslation();
  const [products, setProducts] = useState(exampleProducts);

  useEffect(() => {
    getProductsWomen().then((response: any) => {
      const { data } = response.data;
      setProducts([...data]);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>{t("SectionWomen")}</p>
        </div>
        <div className={styles.products}>
          {products.map((product: any) => (
            <ProductGrid
              key={product.id}
              product={product}
              colorValue="#fa5530"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Women;
