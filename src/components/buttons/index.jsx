import styles from "./styles.module.css";

export function ResetButton({ value, onClick }) {
  return (
    <button className={styles.resetButton} onClick={onClick}>
      {value}
    </button>
  );
}
