import { FC } from 'react';
import { useGameContext } from '../../../utils/hooks/useGameContext';

const ExitConfirmation: FC = () => {
    const { confirmExit, cancelExit } = useGameContext();

    return (
        <div className='exit-overlay'>
            <div className='exit-modal'>
                <h3>Exit Game?</h3>
                <p>Current game progress will be lost. Are you sure?</p>
                <div className='exit-actions'>
                    <button className='confirm-exit' onClick={confirmExit}>
                        Yes, Exit
                    </button>
                    <button className='cancel-exit' onClick={cancelExit}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ExitConfirmation;
