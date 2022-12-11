import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GameService from '../../services/GameService';
import { Game } from '../../types/Game';
import JustOneMainGame from './justOneMainGame/JustOneMainGame';
import JustOneMainGuessing from './justOneMainGuessing/JustOneMainGuessing';
import JustOneMainPreGame from './justOneMainPreGame/JustOneMainPreGame';


function JustOneMain() {
    
    const [game, setGame] = useState<Game>({playing:false, players:[], question:undefined, activePlayer:undefined});

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);

      const ready = (g: Game) => {
        return g.players.every(p => (typeof p.word === 'string' && p.word.length > 0) || p.name == g.activePlayer);
      };

  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
            {
                !game.playing &&
                <JustOneMainPreGame players={game.players} activePlayer={game.activePlayer} playing={game.playing} question={game.question} />
            }
            {
                game.playing && !ready(game) &&
                <JustOneMainGame players={game.players} activePlayer={game.activePlayer} playing={game.playing} question={game.question} />
            }
            {
                game.playing && ready(game) &&
                <JustOneMainGuessing players={game.players} activePlayer={game.activePlayer} playing={game.playing} question={game.question} />
            }
    </Box>
  );
}

export default JustOneMain;