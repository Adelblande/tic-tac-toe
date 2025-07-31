const POSSIBLE_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function verifyIfHasWinner(game, player) {
  for (const combination of POSSIBLE_COMBINATIONS) {
    if (
      game[combination[0]] === player &&
      game[combination[1]] === player &&
      game[combination[2]] === player
    ) {
      return { player, combination };
    }
  }
  return null;
}
