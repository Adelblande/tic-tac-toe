import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const TIME_LIMIT = 5;

export function Timer({ player, setPlayer }) {
  const [time, setTime] = useState(TIME_LIMIT);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((state) => state - 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (time === 0) {
      setTime(TIME_LIMIT);
      setPlayer(player === "x" ? "o" : "x");
    }
  }, [time, player, setPlayer]);

  useEffect(() => {
    setTime(TIME_LIMIT);
  }, [player]);

  return (
    <div className={styles.timer}>
      <h3>
        Player {player.toUpperCase()}: {time}
      </h3>
    </div>
  );
}
