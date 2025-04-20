import { FC } from "react";
import { useGameContext } from "../../../utils/hooks/useGameContext";

const StartScreen: FC = () => {
 
  const { startGameSetup } = useGameContext()
  
  return (
    <div className="start-screen">
      <h1 className="game-title">Tic-Tac-Toe</h1>
      <div className="animated-icon">
        <span className="x-icon">X</span>
        <span className="o-icon">O</span>
      </div>
      <button className="start-button" onClick={startGameSetup}>Start Game</button>
    </div>
  );
};


export default StartScreen