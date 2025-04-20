import { FC } from 'react';
import { useGameContext } from '../../../utils/hooks/useGameContext';

const GameScore: FC = () => {
    const { gameState, currentPlayer, player1, player2 } = useGameContext();

    const getPlayerTurn = () => {
        const currentPlayerObj =
            currentPlayer === player1.symbol ? player1 : player2;
        return `${currentPlayerObj.name}'s turn (${currentPlayer})`;
    };

    return (
        <div className='game-info'>
            <div className='player-scores'>
                <div
                    className={`player-score ${
                        currentPlayer === player1.symbol &&
                        gameState === 'playing'
                            ? 'active-player'
                            : ''
                    }`}
                >
                    {player1.name} ({player1.symbol}): {player1.score}
                </div>
                <div
                    className={`player-score ${
                        currentPlayer === player2.symbol &&
                        gameState === 'playing'
                            ? 'active-player'
                            : ''
                    }`}
                >
                    {player2.name} ({player2.symbol}): {player2.score}
                </div>
            </div>
            {gameState === 'playing' && (
                <div className='turn-indicator'>{getPlayerTurn()}</div>
            )}
        </div>
    );
};

export default GameScore;
