import styles from "./styles.module.css";

export function Scores({ scores }) {
  return (
    <div className={styles.scores}>
      <h3>Scores</h3>
      <p>Player X: {scores.x}</p>
      <p>Player O: {scores.o}</p>
    </div>
  );
}
