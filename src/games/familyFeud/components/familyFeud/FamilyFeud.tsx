import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import AdminLogin from '../adminComponents/adminLogin/AdminLogin';
import Menu from '../adminComponents/menu/Menu';
import Answers from '../answers/Answers';
import AudioComponent from '../audio/AudioComponent';
import Mistakes from '../mistakes/Mistakes';
import Question from '../question/Question';
import Teams from '../teams/Teams';
import { AdminContext } from '../../../../common/contexts/AdminContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import GameService from '../../services/GameService';
import { GameData } from '../../types/GameData';

function FamilyFeud() {
    
    const [gameData, setGameData] = useState<GameData>({mistakes:0, question:"", answers:[], teams:[], settings:{break:true, soundOff:false, pointsMultiplier:1,hideQuestion:false,startSoundCounter:0}} as GameData);
    const [authenticated, setAuthenticated] = useState<boolean>(false);
  
    useEffect(() => {
      const timer = setInterval(async () => {setGameData(await GameService.GetGame())}, 1000);
      return () => clearTimeout(timer);
    }, []);
  

  return (
    <SettingsContext.Provider value={gameData.settings}>
        <AdminContext.Provider value={{authenticated, setAuthenticated}}>
            <AdminLogin />
            <Menu />
            <header><Teams teams={gameData.teams} /></header>
            <nav><Question question={gameData.question} /></nav>
            <section><Answers answers={gameData.answers} /></section>
            <aside><Mistakes mistakes={gameData.mistakes}/></aside>
            <AudioComponent />
        </AdminContext.Provider>
      </SettingsContext.Provider>
  );
}

export default FamilyFeud;