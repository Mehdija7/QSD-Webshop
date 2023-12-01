import styles from "./ArrowRight.module.css";

interface ArrowIconProps {
  isRotated: boolean;
}

const Return: React.FC<ArrowIconProps> = ({ isRotated }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className={`${styles.arrow} ${isRotated ? styles.rotate : ""}`}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  );
};
export default Return;
