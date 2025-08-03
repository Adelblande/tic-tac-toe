import styles from "./styles.module.css";
import { useSettings } from "../../hooks/use-settings";

export function Main({ children }) {
  const { colors } = useSettings();

  return (
    <main className={styles.main} style={{ backgroundColor: colors.board }}>
      {children}
    </main>
  );
}
