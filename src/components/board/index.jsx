import styles from "./styles.module.css";

export function Board({ game, handleClick }) {
  return (
    <div className={styles.board}>
      {game.map((value, index) => {
        return (
          <span key={index} onClick={() => handleClick(index)}>
            {value}
          </span>
        );
      })}
    </div>
  );
}
