export function fillCombinationWinner(
  winnerCombination,
  colorWinningCombination
) {
  winnerCombination.forEach((index) => {
    document.getElementById(`cell-${index}`).style.backgroundColor =
      colorWinningCombination;
  });
}
