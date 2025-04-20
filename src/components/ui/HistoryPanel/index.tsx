import { FC } from 'react';
import { useGameContext } from '../../../utils/hooks/useGameContext';

const HistoryPanel: FC = () => {
    const { gameHistory, closeHistory } = useGameContext();

    return (
        <div className='history-panel'>
            <h3>Game History</h3>
            {gameHistory.length === 0 ? (
                <p>No games played yet!</p>
            ) : (
                <div className='history-list'>
                    {gameHistory.map((game, index) => (
                        <div key={index} className='history-item'>
                            <p>
                                {game.winner === 'Draw'
                                    ? `Draw between ${game.player1} and ${game.player2}`
                                    : `${game.winner} won against ${
                                          game.winner === game.player1
                                              ? game.player2
                                              : game.player1
                                      }`}
                            </p>
                            <small>{game.date}</small>
                        </div>
                    ))}
                </div>
            )}
            <button className='close-history' onClick={closeHistory}>
                Close
            </button>
        </div>
    );
};

export default HistoryPanel;
