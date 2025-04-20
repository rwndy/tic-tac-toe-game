import { FC } from 'react';
import { useGameContext } from '../../../utils/hooks/useGameContext';
import { SymbolSelector } from '../../ui';

const PlayerSetupScreen: FC = () => {
    const {
        selectedSymbol,
        player1,
        player2,
        chooseSymbol,
        updatePlayer1Name,
        updatePlayer2Name,
        startGame,
        handleExitGame,
    } = useGameContext();

    return (
        <div className='setup-screen'>
            <h2>Choose Your Symbol</h2>
            <SymbolSelector
                selectedSymbol={selectedSymbol}
                onSelectSymbol={chooseSymbol}
            />

            {selectedSymbol && (
                <div className='player-input'>
                    <div className='input-group'>
                        <label>Player 1 Name ({player1.symbol})</label>
                        <input
                            type='text'
                            value={player1.name}
                            onChange={(e) => updatePlayer1Name(e.target.value)}
                            placeholder='Enter name'
                        />
                    </div>
                    <div className='input-group'>
                        <label>Player 2 Name ({player2.symbol})</label>
                        <input
                            type='text'
                            value={player2.name}
                            onChange={(e) => updatePlayer2Name(e.target.value)}
                            placeholder='Enter name'
                        />
                    </div>
                    <div className='button-group'>
                        <button className='play-button' onClick={startGame}>
                            Let's Play!
                        </button>
                        <button
                            className='exit-button'
                            onClick={handleExitGame}
                        >
                            Back to Start
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlayerSetupScreen;
