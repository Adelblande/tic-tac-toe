import "./styles.css";
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
    <div className="timer">
      {/* <img src="/ampulheta.png" width={40} height={40} /> */}
      <h3>
        Player {player}: {time}
      </h3>
    </div>
  );
}
