import "./App.css";
import { ResetButton, Timer, Board, Scores } from "./components/index.js";
import { useGame } from "./hooks/use-game";

function App() {
  const { game, message, player, scores, handleClick, resetGame, setPlayer } =
    useGame();

  return (
    <>
      <header className="header">
        <Scores scores={scores} />
        {!message && <Timer player={player} setPlayer={setPlayer} />}
      </header>

      <main className="main">
        {message && <span className="message">{message}</span>}
        <Board game={game} handleClick={handleClick} />
        <ResetButton onClick={resetGame} value="Reset Game" />
      </main>
    </>
  );
}

export default App;
