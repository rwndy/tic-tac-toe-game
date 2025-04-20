import { FC } from 'react';
import { GamePlayScreen, PlayerSetupScreen, StartScreen } from '../screens';
import { useGameContext } from '../../utils/hooks/useGameContext';

const TicTacToeGameContent: FC = () => {
    const { gameState } = useGameContext();

    const renderGameScreen = () => {
        switch (gameState) {
            case 'start':
                return <StartScreen />;
            case 'playerSetup':
                return <PlayerSetupScreen />;
            case 'playing':
            case 'gameOver':
                return <GamePlayScreen />;
            default:
                return <StartScreen />;
        }
    };

    return <div className='game-container'>{renderGameScreen()}</div>;
};

export default TicTacToeGameContent;
