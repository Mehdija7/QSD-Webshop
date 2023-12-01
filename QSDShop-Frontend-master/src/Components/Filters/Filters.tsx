import { useEffect, useState } from "react";
import styles from "./Filters.module.css";

const Filters = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [array, setArray] = useState(props.listItems);

  useEffect(() => {
    setArray(props.listItems);
  }, [props.listItems]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.container}>
        <p className={styles.text}>{props.headerValue}</p>
        <div className={styles.arrow}>
          <button onClick={() => toggleDropdown()} className={styles.arrow}>
            <svg height="20" width="20" viewBox="0 0 20 20" focusable="false">
              <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={styles.items}>
          {array.map((item: any) => (
            <div key={item.id}>
              <br></br>
              <p className={styles.listItem}>
                {item.size ? item.size : item.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
