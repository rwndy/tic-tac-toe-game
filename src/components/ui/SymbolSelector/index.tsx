import { FC } from 'react';
import { PlayerSymbol } from '../../../types/game';

interface SymbolSelectorProps {
    selectedSymbol: PlayerSymbol | null;
    onSelectSymbol: (symbol: PlayerSymbol) => void;
}

const SymbolSelector: FC<SymbolSelectorProps> = ({
    selectedSymbol,
    onSelectSymbol,
}) => {
    return (
        <div className='symbol-selection'>
            <button
                className={`symbol-btn ${
                    selectedSymbol === 'X' ? 'selected' : ''
                }`}
                onClick={() => onSelectSymbol('X')}
            >
                X
            </button>
            <button
                className={`symbol-btn ${
                    selectedSymbol === 'O' ? 'selected' : ''
                }`}
                onClick={() => onSelectSymbol('O')}
            >
                O
            </button>
        </div>
    );
};

export default SymbolSelector;
