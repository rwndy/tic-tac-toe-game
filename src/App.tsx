import { GameProvider } from './context/GameContext';
import TicTacToeGameContent from './components/content/TicTacToeGameContent';

function App() {
   return (
    <GameProvider>
      <TicTacToeGameContent />
    </GameProvider>
   )
}
export default App;
