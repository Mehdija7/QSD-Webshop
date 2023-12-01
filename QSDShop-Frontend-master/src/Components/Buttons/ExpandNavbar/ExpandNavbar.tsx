import styles from "./ExpandNavbar.module.css";
interface ExpandNavbarProps {
  visible?: boolean;
}

const ExpandNavbar: React.FC<ExpandNavbarProps> = ({ visible }) => {
  return (
    <button className={styles.expandNavbar}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height="25"
        width="25"
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </button>
  );
};
export default ExpandNavbar;
