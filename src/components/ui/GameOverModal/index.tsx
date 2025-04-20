import { FC } from 'react'
import { useGameContext } from '../../../utils/hooks/useGameContext';

interface GameOverModalProps {
  toggleHistory: () => void;
}


const GameOverModal: FC<GameOverModalProps> = ({ toggleHistory }) => {
  const { winner, resetGame, newGame } = useGameContext();
  
  return (
    <div className="game-over-overlay">
      <div className="game-over-modal">
        <h2>
          {winner === 'draw' 
            ? "It's a Draw!" 
            : `${winner?.name} Wins!`
          }
        </h2>
        <div className="game-actions">
          <button className="play-again-btn" onClick={resetGame}>Play Again</button>
          <button className="new-game-btn" onClick={newGame}>New Game</button>
          <button className="history-btn" onClick={toggleHistory}>
            Show History
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverModal