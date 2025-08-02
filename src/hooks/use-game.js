import { useCallback, useState, useEffect, useContext } from "react";
import { verifyIfHasWinner } from "../utils/verify-if-has-winner";
import { SettingsContext } from "../context/settings-context";
import { resetfillingCombinationWinner } from "../utils/reset-filling-combination-winner";
import { fillCombinationWinner } from "../utils/fill-combination-winner";

const INITIAL_GAME = [null, null, null, null, null, null, null, null, null];

export function useGame() {
  const [player, setPlayer] = useState("x");
  const [game, setGame] = useState(INITIAL_GAME);
  const [winner, setWinner] = useState(null);
  const [message, setMessage] = useState(null);
  const [scores, setScores] = useState({ x: 0, o: 0 });

  const { colors } = useContext(SettingsContext);

  const resetGame = useCallback(() => {
    setPlayer("x");
    setGame(INITIAL_GAME);
    setWinner(null);
    setMessage(null);
    resetfillingCombinationWinner();
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

      if (playerWinner) {
        setScores((state) => ({
          ...state,
          [playerWinner.player]: state[playerWinner.player] + 1,
        }));
      }

      setGame(newGame);

      setPlayer(player === "x" ? "o" : "x");
    },
    [game, player, winner]
  );

  useEffect(() => {
    if (winner) {
      setMessage(`Player ${winner.player} won!`);
      fillCombinationWinner(winner.combination, colors.winningCombination);
    }
  }, [winner, colors.winningCombination]);

  useEffect(() => {
    if (game.every((value) => value !== null) && !winner) {
      setMessage("Got old");
    }
  }, [game, winner]);

  return {
    game,
    player,
    winner,
    message,
    scores,
    handleClick,
    resetGame,
    setPlayer,
  };
}
