import { useEffect, useState } from 'react';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import GameService from "./GameService"
import Mistakes from './components/mistakes/Mistakes';
import Teams from './components/teams/Teams';
import { GameData } from './types/GameData';
import './App.css';

function App() {

  const [gameData, setGameData] = useState<GameData>({mistakes:0, question:"", answers:[], teams:[], break:true} as GameData);

  useEffect(() => {
    const timer = setInterval(async () => {setGameData(await GameService.GetGame())}, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header><Teams teams={gameData.teams} /></header>
      <nav><Question question={gameData.question}/></nav>
      <section><Answers answers={gameData.answers} /></section>
      <aside><Mistakes mistakes={gameData.mistakes}/></aside>
      {gameData.break?<div className="Overlay" ><span>Waiting for next question!</span></div>:null}
    </div>
  );
}

export default App;
