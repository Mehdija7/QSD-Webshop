import styles from "./Cart.module.css";
interface CartProps {
  hover?: boolean;
}

const Cart: React.FC<CartProps> = ({ hover }) => {
  const cartClassName = hover ? styles.cartHover : styles.cart;

  return (
    <button className={cartClassName}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="25"
        width="25"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        ></path>
      </svg>
    </button>
  );
};
export default Cart;
