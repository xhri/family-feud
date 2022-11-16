import { createContext, useEffect, useState } from 'react';
import Question from './components/question/Question';
import Answers from './components/answers/Answers';
import GameService from "./services/GameService"
import Mistakes from './components/mistakes/Mistakes';
import Teams from './components/teams/Teams';
import { GameData } from './types/GameData';
import './App.css';
import { SettingsContext } from './contexts/SettingsContext';
import SettingsMarkers from './components/settingsMarkers/SettingsMarkers';
import AudioComponent from './components/audio/AudioComponent';
import AdminLogin from './components/adminComponents/adminLogin/AdminLogin';
import { AdminContext } from './contexts/AdminContext';
import { createTheme, ThemeProvider } from '@mui/material';
import Menu from './components/adminComponents/menu/Menu';

function App() {

  const [gameData, setGameData] = useState<GameData>({mistakes:0, question:"", answers:[], teams:[], settings:{break:true, soundOff:false, pointsMultiplier:1,hideQuestion:false,startSoundCounter:0}} as GameData);
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(async () => {setGameData(await GameService.GetGame())}, 1000);
    return () => clearTimeout(timer);
  }, []);


  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      primary:{
        main:'#1976d2',
        light: '#c8ffc8',
        dark: '#c8ffc8'
      },
      secondary:{
        main:'#8cd4f5'
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      }
    },
  });

  return (
    <div className="App">
      <SettingsContext.Provider value={gameData.settings}>
        <AdminContext.Provider value={{authenticated, setAuthenticated}}>
          <ThemeProvider theme={theme}>
            <AdminLogin />
            <Menu />
            <header><Teams teams={gameData.teams} /></header>
            <nav><Question question={gameData.question} /></nav>
            <section><Answers answers={gameData.answers} /></section>
            <aside><Mistakes mistakes={gameData.mistakes}/></aside>
            <AudioComponent />
          </ThemeProvider>
        </AdminContext.Provider>
      </SettingsContext.Provider>
    </div>
  );
}

export default App;
