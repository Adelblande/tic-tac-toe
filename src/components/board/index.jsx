import styles from "./styles.module.css";

export function Board({ game, colors, handleClick }) {
  return (
    <div className={styles.board}>
      {game.map((value, index) => {
        return (
          <span
            id={`cell-${index}`}
            key={index}
            style={{ color: colors[value] }}
            onClick={() => handleClick(index)}
          >
            {value}
          </span>
        );
      })}
    </div>
  );
}
