import { FC } from 'react'

interface GameHeaderProps {
  handleExitGame: () => void
}

const GameHeader: FC<GameHeaderProps> = ({ handleExitGame }) => {
  return (
    <div className="header-actions">
      <button className="exit-game-btn" onClick={handleExitGame}>
        Exit Game
      </button>
    </div>
  );
};

export default GameHeader