import "./App.css";
import { ResetButton } from "./components/index.js";
import { Timer } from "./components/timer/index.jsx";
import { useGame } from "./hooks/use-game";

function App() {
  const { game, message, player, handleClick, resetGame, setPlayer } =
    useGame();

  return (
    <>
      {!message && <Timer player={player} setPlayer={setPlayer} />}
      {message && <h1>{message}</h1>}
      <div className="board">
        {game.map((value, index) => {
          return (
            <span key={index} onClick={() => handleClick(index)}>
              {value}
            </span>
          );
        })}
      </div>
      <ResetButton onClick={resetGame} value="Reset Game" />
    </>
  );
}

export default App;
