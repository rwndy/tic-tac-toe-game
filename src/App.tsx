import { GameProvider } from './context/GameContext';
import TicTacToeGameContent from './components/content/TicTacToeGameContent';
import './App.css';

function App() {
   return (
    <GameProvider>
      <TicTacToeGameContent />
    </GameProvider>
   )
}
export default App;
