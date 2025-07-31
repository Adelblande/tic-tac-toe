import "./App.css";
import { useGame } from "./hooks/use-game";

function App() {
  const { handleClick, game, message } = useGame();

  return (
    <>
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
    </>
  );
}

export default App;
