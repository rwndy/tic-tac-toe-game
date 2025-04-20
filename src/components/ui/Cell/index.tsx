import { FC } from 'react'
import { PlayerSymbol } from '../../../types/game'

interface CellProps {
  index: number;
  value: PlayerSymbol | null;
  onClick: () => void;
}

const Cell: FC<CellProps> = ({ value, onClick }) => {
  return (
    <div 
      className={`cell ${value ? (value === 'X' ? 'x-cell' : 'o-cell') : ''}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Cell