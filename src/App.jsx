import { useState } from "react";
import "./App.css";

const initialGame = [null, null, null, null, null, null, null, null, null];

function App() {
  const [player, setPlayer] = useState("x");
  const [game, setGame] = useState(initialGame);

  function handleClick(clickedIndex) {
    if (game[clickedIndex]) {
      return;
    }

    const newGame = [...game];
    newGame[clickedIndex] = player;
    setGame(newGame);

    setPlayer(player === "x" ? "o" : "x");
  }

  return (
    <div className="board">
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

export default App;
