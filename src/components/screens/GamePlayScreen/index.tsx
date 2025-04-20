import { FC } from 'react';
import { useGameContext } from '../../../utils/hooks/useGameContext';

import {
    ExitConfirmation,
    GameBoard,
    GameHeader,
    GameOverModal,
    GameScore,
    HistoryPanel,
} from '../../ui';

const GamePlayScreen: FC = () => {
    const {
        gameState,
        showHistory,
        showExitConfirm,
        handleExitGame,
        toggleHistory,
    } = useGameContext();

    return (
        <div className='game-play'>
            <GameHeader handleExitGame={handleExitGame} />
            <GameScore />
            <GameBoard />

            {gameState === 'gameOver' && (
                <GameOverModal toggleHistory={toggleHistory} />
            )}

            {showHistory && <HistoryPanel />}
            {showExitConfirm && <ExitConfirmation />}
        </div>
    );
};

export default GamePlayScreen;
