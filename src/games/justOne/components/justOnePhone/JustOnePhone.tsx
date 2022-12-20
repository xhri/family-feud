import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { RegisterPhone } from '../../../../common/components/gameComponents/registerPhone/RegisterPhone';
import { WaitingPhone } from '../../../../common/components/gameComponents/waitingPhone/WaitingPhone';
import { RegisterContext } from '../../contexts/RegisterContext';
import GameService from '../../services/GameService';
import { Game } from '../../types/Game';
import { JustOnePhonePlay } from './justOnePhonePlay/JustOnePhonePlay';


function JustOnePhone() {
    
    const [game, setGame] = useState<Game>({playing:false, teams:[], activeTeam:0, teamGames:[]});
    const [name, setName] = useState("");
    const [team, setTeam] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);

      
    const teamGame = () => game.teamGames.find(t => t.id == game.activeTeam)!;
    const currentTeam = () => game.teams.find(t => t.id == game.activeTeam)!;

    const iGaveWord = () => {
        let player = teamGame().players.find(p => p.name === name);

        if (player){
            if (typeof player.word === 'string')
                return true;
        }
        return false;
    };

    const showRegister = () => {
        return game.playing && name == "" && game.teams.length > 0;
    };

    const showWaiting = () => {
        return (!game.playing || (name != "" && game.activeTeam != team) || (name != "" && (!teamGame().playing || teamGame().activePlayer == name || iGaveWord())));
    };

    const showPlaying = () => {
        return name != "" && game.activeTeam == team && game.playing && teamGame().playing && teamGame().activePlayer != name && !iGaveWord();
    };

    const waitingMessage = () => {

        let text = "Oczekiwanie na start.";
        if (game.playing && game.activeTeam == team){
            if (teamGame().activePlayer == name && teamGame().playing){
               text = "Zgadujesz, oczekiwanie na hasła."; 
            }
            if (teamGame().playing && teamGame().players.every(p => (typeof p.word === 'string' && p.word.length > 0) || p.name == teamGame().activePlayer)){
               text = "Spójrz na ekran główny."; 
            }
        }else if (game.playing && game.activeTeam != team){
            text = "Gra inna drużyna";
        }

        return text;
    };

    const addPlayer = async (name: string) => {
        await GameService.AddPlayer(name);
        // TODO sprawdzic, czy sie udalo
        setName(name);
        setTeam(currentTeam().id);
    };

  return (
    <RegisterContext.Provider value={{name, team, setName, setTeam}}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx ={{
                marginLeft:'20px',
                marginRight:'20px'
            }}>
                {
                    showRegister() &&
                    <RegisterPhone mainText={`Rekrurujemy do ${currentTeam().name}. Podaj imię:`} addPlayer={addPlayer} dialogText={name => `Czy na pewno chcesz się nazywać '${name}' i zapisać się do ${currentTeam().name}?`} />
                    //<JustOnePhoneRegister id={currentTeam().id} points={currentTeam().points} name={currentTeam().name}  />
                }
                {
                    showWaiting() &&
                    <WaitingPhone word={waitingMessage()} />
                }
                {
                    showPlaying() &&
                    <JustOnePhonePlay id={teamGame().id} players={teamGame().players} activePlayer={teamGame().activePlayer} playing={teamGame().playing} question={teamGame().question} />
                }
        </Box>
    </RegisterContext.Provider>
  );
}

export default JustOnePhone;