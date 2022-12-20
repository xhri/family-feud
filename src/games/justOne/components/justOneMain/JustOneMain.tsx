import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import GameService from '../../services/GameService';
import { Game } from '../../types/Game';
import JustOneAddTeam from './justOneAddTeam/JustOneAddTeam';
import JustOneTeamPlay from './justOneTeamPlay/JustOneTeamPlay';


function JustOneMain() {
    
    const [game, setGame] = useState<Game>({playing:false, teams:[], activeTeam:0, teamGames:[]});

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);

  const teamGame = () => game.teamGames.find(t => t.id == game.activeTeam)!;

  return (
    <>
      {
          !game.playing &&
          <JustOneAddTeam teams={game.teams} activeTeam={game.activeTeam} playing={game.playing} teamGames={game.teamGames} />
      }
      {
          game.playing &&
          <JustOneTeamPlay id={teamGame().id} players={teamGame().players} activePlayer={teamGame().activePlayer} playing={teamGame()!.playing} question={teamGame()!.question} />
      }
    </>
  );
}

export default JustOneMain;