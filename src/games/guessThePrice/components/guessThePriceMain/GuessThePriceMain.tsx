import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAbortController } from 'react-query/types/core/utils';
import { WaitingForPlayers } from '../../../../common/components/gameComponents/waitingForPlayers/WaitingForPlayers';
import GameService from '../../services/GameService';
import { Game } from '../../types/Game';
import { GuessThePriceAnswer } from './guessThePriceAnswer/GuessThePriceAnswer';
import { GuessThePriceQuestion } from './guessThePriceQuestion/GuessThePriceQuestion';


export function GuessThePriceMain() {
    
    const [game, setGame] = useState<Game>({playing:false, guessing:false, players:[], question:{price:0, id:0, offerName:"", nameCategory:""}});

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);


  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        marginLeft="0.7vw"
        marginRight="0.7vw">
        {
            !game.playing &&
            <WaitingForPlayers label={'Gracze:'} players={game.players.map(p=>p.name)} start={GameService.StartGame} />
        }
        {
            game.playing && game.guessing &&
            <GuessThePriceQuestion players={game.players} playing={game.playing} guessing={game.guessing} question={game.question} />
        }
        {
            game.playing && !game.guessing &&
            <GuessThePriceAnswer players={game.players} playing={game.playing} guessing={game.guessing} question={game.question} />
        }
    </Box>
  );
}