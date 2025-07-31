import { useCallback, useState, useEffect } from "react";
import { verifyIfHasWinner } from "../utils/verify-if-has-winner";

const INITIAL_GAME = [null, null, null, null, null, null, null, null, null];

export function useGame() {
  const [player, setPlayer] = useState("x");
  const [game, setGame] = useState(INITIAL_GAME);
  const [winner, setWinner] = useState(null);
  const [message, setMessage] = useState(null);

  const resetGame = useCallback(() => {
    setPlayer("x");
    setGame(INITIAL_GAME);
    setWinner(null);
    setMessage(null);
  }, []);

  const handleClick = useCallback(
    (clickedIndex) => {
      if (game[clickedIndex] || winner) {
        return;
      }

      const newGame = [...game];
      newGame[clickedIndex] = player;

      const playerWinner = verifyIfHasWinner(newGame, player);

      setWinner(playerWinner);

      setGame(newGame);

      setPlayer(player === "x" ? "o" : "x");
    },
    [game, player, winner]
  );

  useEffect(() => {
    if (winner) {
      setMessage(`Player ${winner.player} won!`);
    }
  }, [winner]);

  return {
    game,
    player,
    winner,
    message,
    handleClick,
    resetGame,
    setPlayer,
  };
}
