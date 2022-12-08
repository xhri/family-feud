import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NameContext } from '../../contexts/NameContext';
import GameService from '../../services/GameService';
import { Game } from '../../types/Game';
import JustOnePhonePlay from './justOnePhonePlay/JustOnePhonePlay';
import JustOnePhoneRegister from './justOnePhoneRegister/JustOnePhoneRegister';
import JustOnePhoneWaiting from './justOnePhoneWaiting/JustOnePhoneWaiting';


function JustOnePhone() {
    
    const [game, setGame] = useState<Game>({playing:false, players:[], question:undefined, activePlayer:undefined});
    const [name, setName] = useState("");

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);

      const iGaveWord = () => {
        let player = game.players.find(p => p.name === name);

        if (player){
            if (typeof player.word === 'string')
                return true;
        }
        return false;
      };

  return (
    <NameContext.Provider value={{name, setName}}>
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
                    name == "" &&
                    <JustOnePhoneRegister />
                }
                {
                    name != "" && (!game.playing || game.activePlayer == name || iGaveWord()) &&
                    <JustOnePhoneWaiting />
                }
                {
                    name != "" && game.playing && game.activePlayer != name && !iGaveWord() &&
                    <JustOnePhonePlay players={game.players} activePlayer={game.activePlayer} playing={game.playing} question={game.question} />
                }
        </Box>
    </NameContext.Provider>
  );
}

export default JustOnePhone;