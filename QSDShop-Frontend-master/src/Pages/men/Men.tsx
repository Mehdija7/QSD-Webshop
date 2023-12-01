import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import styles from "./Men.module.css";
import { useTranslation } from "react-i18next";
import { getProductsMen } from "../../Api/Service";
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

const Men = () => {
  const exampleProducts: Product[] = [
    {
      id: 1,
      name: "Shirt",
      price: "14.0",
      gender: "F",
      created_at: null,
      updated_at: null,
      colors_id: 1,
      brands_id: 2,
      total_rating: 0,
      avg_rating: 0,
      description: "",
      color: {
        id: 1,
        name: "red",
        hex_code: null,
        created_at: null,
        updated_at: null,
      },
      brand: {
        id: 2,
        name: "Bershka",
        created_at: null,
        updated_at: null,
      },
      sizes: [
        {
          id: 1,
          size: "M",
          created_at: null,
          updated_at: null,
        },
      ],
      images: [
        {
          id: 1,
          name: "Majica Bershka",
          created_at: null,
          updated_at: null,
          products_id: 1,
          link: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0ODQ0NDQ0ODQ0NDQ0NDw8PDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OFRAQFy0dHR0tLS0tLS0tLS4tLS0uLi0tLS0tLS0tLS0tLS0tKy0tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIANIA8AMBEQACEQEDEQH/",
        },
      ],
    },
  ];
  const { t } = useTranslation();
  const [products, setProducts] = useState(exampleProducts);

  useEffect(() => {
    getProductsMen().then((response: any) => {
      const { data } = response.data;
      setProducts([...data]);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>{t("SectionMen")}</p>
        </div>
        <div className={styles.products}>
          {products.map((product: any) => (
            <ProductGrid
              key={product.id}
              product={product}
              colorValue="#2fc8a4"
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Men;
