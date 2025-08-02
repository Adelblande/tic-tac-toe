import styles from "./styles.module.css";

export function Main({ children, backgroundColor }) {
  return (
    <main className={styles.main} style={{ backgroundColor }}>
      {children}
    </main>
  );
}
