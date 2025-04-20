import { createContext, FC, useState, useEffect, ReactNode, } from 'react';

import {
    GameContextType,
    GameStateType,
    Player,
    PlayerSymbol,
    GameHistoryItem,
} from '../types/game';

import { checkWinner } from '../utils/gameLogic';

export const GameContext = createContext<GameContextType | undefined>(
    undefined
);

interface GameProviderProps {
    children: ReactNode;
}

export const GameProvider: FC<GameProviderProps> = ({ children }) => {
    const [gameState, setGameState] = useState<GameStateType>('start');
    const [currentPlayer, setCurrentPlayer] = useState<PlayerSymbol>('X');
    const [selectedSymbol, setSelectedSymbol] = useState<PlayerSymbol | null>(
        null
    );
    const [player1, setPlayer1] = useState<Player>({
        name: '',
        symbol: 'X',
        score: 0,
    });
    const [player2, setPlayer2] = useState<Player>({
        name: '',
        symbol: 'O',
        score: 0,
    });
    const [board, setBoard] = useState<(PlayerSymbol | null)[]>(
        Array(9).fill(null)
    );
    const [winner, setWinner] = useState<Player | 'draw' | null>(null);
    const [gameHistory, setGameHistory] = useState<GameHistoryItem[]>([]);
    const [showHistory, setShowHistory] = useState<boolean>(false);
    const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

    const gameActions = {
        startGameSetup: () => setGameState('playerSetup'),

        chooseSymbol: (symbol: PlayerSymbol) => {
            setSelectedSymbol(symbol);
            setPlayer1({ ...player1, symbol: symbol });
            setPlayer2({ ...player2, symbol: symbol === 'X' ? 'O' : 'X' });

            if (symbol === 'O') {
                setCurrentPlayer('O');
            } else {
                setCurrentPlayer('X');
            }
        },

        startGame: () => {
            if (player1.name.trim() === '' || player2.name.trim() === '') {
                alert('Please enter names for both players!');
                return;
            }
            setGameState('playing');
        },

        handleCellClick: (index: number) => {
            if (gameState !== 'playing' || board[index] || winner) return;

            const newBoard = [...board];
            newBoard[index] = currentPlayer;
            setBoard(newBoard);

            setCurrentPlayer((prevState: PlayerSymbol) => {
                return prevState === player1.symbol
                    ? player2.symbol
                    : player1.symbol;
            });
        },

        resetGame: () => {
            setBoard(Array(9).fill(null));
            setWinner(null);
            setCurrentPlayer(player1.symbol === 'O' ? 'O' : 'X');
            setGameState('playing');
        },

        newGame: () => {
            setGameState('start');
            setBoard(Array(9).fill(null));
            setWinner(null);
            setPlayer1({ name: '', symbol: 'X', score: 0 });
            setPlayer2({ name: '', symbol: 'O', score: 0 });
            setSelectedSymbol(null);
            setCurrentPlayer('X');
            setGameHistory([]);
        },

        handleExitGame: () => {
            if (
                gameState === 'playing' &&
                !board.every((cell) => cell === null)
            ) {
                setShowExitConfirm(true);
            } else {
                setGameState('start');
                setBoard(Array(9).fill(null));
                setWinner(null);
                setShowHistory(false);
            }
        },

        confirmExit: () => {
            setGameState('start');
            setBoard(Array(9).fill(null));
            setWinner(null);
            setShowExitConfirm(false);
            setShowHistory(false);
        },

        toggleHistory: () => setShowHistory(!showHistory),
        closeHistory: () => setShowHistory(false),
        cancelExit: () => setShowExitConfirm(false),
        updatePlayer1Name: (name: string) => setPlayer1({ ...player1, name }),
        updatePlayer2Name: (name: string) => setPlayer2({ ...player2, name }),
    };

    useEffect(() => {
        if (gameState === 'playing') {
            const result = checkWinner(board);

            if (result.winner) {
                const winningPlayer =
                    result.winner === player1.symbol ? player1 : player2;
                setWinner(winningPlayer);

                if (result.winner === player1.symbol) {
                    setPlayer1({ ...player1, score: player1.score + 1 });
                } else {
                    setPlayer2({ ...player2, score: player2.score + 1 });
                }

                setGameHistory([
                    ...gameHistory,
                    {
                        winner: winningPlayer.name,
                        player1: player1.name,
                        player2: player2.name,
                        date: new Date().toLocaleString(),
                    },
                ]);

                setGameState('gameOver');
            } else if (result.isDraw) {
                setWinner('draw');

                setGameHistory([
                    ...gameHistory,
                    {
                        winner: 'Draw',
                        player1: player1.name,
                        player2: player2.name,
                        date: new Date().toLocaleString(),
                    },
                ]);

                setGameState('gameOver');
            }
        }
    }, [board, gameState, player1, player2, gameHistory]);

    const value: GameContextType = {
        gameState,
        currentPlayer,
        selectedSymbol,
        player1,
        player2,
        board,
        winner,
        gameHistory,
        showHistory,
        showExitConfirm,
        ...gameActions,
    };

    return (
        <GameContext.Provider value={value}>{children}</GameContext.Provider>
    );
};
