import { createContext, useEffect, useState } from 'react';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import GameService from "./GameService"
import Mistakes from './components/mistakes/Mistakes';
import Teams from './components/teams/Teams';
import { GameData } from './types/GameData';
import './App.css';
import { SettingsContext } from './SettingsContext';
import SettingsMarkers from './components/settingsMarkers/SettingsMarkers';

function App() {

  const [gameData, setGameData] = useState<GameData>({mistakes:0, question:"", answers:[], teams:[], settings:{break:true, soundOff:false, pointsMultiplier:1,hideQuestion:false,startSoundCounter:0}} as GameData);
  
  useEffect(() => {
    const timer = setInterval(async () => {setGameData(await GameService.GetGame())}, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <SettingsContext.Provider value={gameData.settings}>
        <SettingsMarkers />
        <header><Teams teams={gameData.teams} /></header>
        <nav><Question question={gameData.question} /></nav>
        <section><Answers answers={gameData.answers} /></section>
        <aside><Mistakes mistakes={gameData.mistakes}/></aside>
        {gameData.settings.break?<div className="Overlay" ><span>Waiting for next question!</span></div>:null}
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
