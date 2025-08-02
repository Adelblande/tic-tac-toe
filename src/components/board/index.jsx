import styles from "./styles.module.css";
import { useSettings } from "../../hooks/use-settings";

export function Board({ game, handleClick }) {
  const { colors } = useSettings();

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
