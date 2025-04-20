import { PlayerSymbol, WinnerResult } from "../types/game";

export const checkWinner = (board: (PlayerSymbol | null)[]): WinnerResult => {
  const winningCombinations: number[][] = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
  ];
  
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return {
        winner: board[a] as PlayerSymbol,
        isDraw: false,
        winningLine: combo
      };
    }
  }

  const isDraw = !board.includes(null);
  
  return {
    winner: null,
    isDraw,
    winningLine: null
  };
};