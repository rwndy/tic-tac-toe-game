import { FC } from 'react';
import { useGameContext } from '../../../utils/hooks/useGameContext';

import Cell from '../Cell';

const GameBoard: FC = () => {
    const { board, handleCellClick } = useGameContext();

    return (
        <div className='board'>
            <div className='row'>
                <Cell
                    index={0}
                    value={board[0]}
                    onClick={() => handleCellClick(0)}
                />
                <Cell
                    index={1}
                    value={board[1]}
                    onClick={() => handleCellClick(1)}
                />
                <Cell
                    index={2}
                    value={board[2]}
                    onClick={() => handleCellClick(2)}
                />
            </div>
            <div className='row'>
                <Cell
                    index={3}
                    value={board[3]}
                    onClick={() => handleCellClick(3)}
                />
                <Cell
                    index={4}
                    value={board[4]}
                    onClick={() => handleCellClick(4)}
                />
                <Cell
                    index={5}
                    value={board[5]}
                    onClick={() => handleCellClick(5)}
                />
            </div>
            <div className='row'>
                <Cell
                    index={6}
                    value={board[6]}
                    onClick={() => handleCellClick(6)}
                />
                <Cell
                    index={7}
                    value={board[7]}
                    onClick={() => handleCellClick(7)}
                />
                <Cell
                    index={8}
                    value={board[8]}
                    onClick={() => handleCellClick(8)}
                />
            </div>
        </div>
    );
};

export default GameBoard;
