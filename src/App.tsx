import { createContext, useEffect, useState } from 'react';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import GameService from "./GameService"
import Mistakes from './components/mistakes/Mistakes';
import Teams from './components/teams/Teams';
import { GameData } from './types/GameData';
import './App.css';
import { SettingsContext } from './contexts/SettingsContext';
import SettingsMarkers from './components/settingsMarkers/SettingsMarkers';
import AudioComponent from './components/audio/AudioComponent';
import AdminLogin from './components/adminLogin/AdminLogin';
import { AdminContext } from './contexts/AdminContext';

function App() {

  const [gameData, setGameData] = useState<GameData>({mistakes:0, question:"", answers:[], teams:[], settings:{break:true, soundOff:false, pointsMultiplier:1,hideQuestion:false,startSoundCounter:0}} as GameData);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(async () => {setGameData(await GameService.GetGame())}, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <SettingsContext.Provider value={gameData.settings}>
        <AdminContext.Provider value={{authenticated, setAuthenticated}}>
          <AdminLogin />
          <SettingsMarkers />
          <header><Teams teams={gameData.teams} /></header>
          <nav><Question question={gameData.question} /></nav>
          <section><Answers answers={gameData.answers} /></section>
          <aside><Mistakes mistakes={gameData.mistakes}/></aside>
          {gameData.settings.break?<div className="Overlay" ><span>Waiting for next question!</span></div>:null}
          <AudioComponent />
        </AdminContext.Provider>
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
