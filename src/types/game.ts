export type PlayerSymbol = 'X' | 'O';
export type GameStateType = 'start' | 'playerSetup' | 'playing' | 'gameOver';

export interface Player {
    name: string;
    symbol: PlayerSymbol;
    score: number;
}

export interface GameHistoryItem {
    winner: string;
    player1: string;
    player2: string;
    date: string;
}

export interface WinnerResult {
    winner: PlayerSymbol | null;
    isDraw: boolean;
    winningLine: number[] | null;
}

export interface GameContextType {
    gameState: GameStateType;
    currentPlayer: PlayerSymbol;
    selectedSymbol: PlayerSymbol | null;
    player1: Player;
    player2: Player;
    board: (PlayerSymbol | null)[];
    winner: Player | 'draw' | null;
    gameHistory: GameHistoryItem[];
    showHistory: boolean;
    showExitConfirm: boolean;

    startGameSetup: () => void;
    chooseSymbol: (symbol: PlayerSymbol) => void;
    startGame: () => void;
    handleCellClick: (index: number) => void;
    resetGame: () => void;
    newGame: () => void;
    handleExitGame: () => void;
    confirmExit: () => void;
    toggleHistory: () => void;
    closeHistory: () => void;
    cancelExit: () => void;
    updatePlayer1Name: (name: string) => void;
    updatePlayer2Name: (name: string) => void;
}
