export function resetfillingCombinationWinner() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).style.backgroundColor = "#fff";
  }
}
