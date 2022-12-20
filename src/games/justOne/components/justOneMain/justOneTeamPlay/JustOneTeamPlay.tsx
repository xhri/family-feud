import { Box } from '@mui/material';
import { WaitingForPlayers } from '../../../../../common/components/gameComponents/waitingForPlayers/WaitingForPlayers';
import GameService from '../../../services/GameService';
import { TeamGame } from '../../../types/TeamGame';
import JustOneMainGame from '../justOneMainGame/JustOneMainGame';
import JustOneMainGuessing from '../justOneMainGuessing/JustOneMainGuessing';


function JustOneTeamPlay(game: TeamGame) {
    
    //const [game, setGame] = useState<Game>({playing:false, teams:[], activeTeam:0, teamGames:[]});

    // useEffect(() => {
    //     const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
    //     return () => clearTimeout(timer);
    //   }, []);

      const ready = (g: TeamGame) => {
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
                <WaitingForPlayers label={'Gracze:'} players={game.players.map(p => p.name)} start={GameService.NextTurn} />
            }
            {
                game.playing && !ready(game) &&
                <JustOneMainGame id={game.id} players={game.players} activePlayer={game.activePlayer} playing={game.playing} question={game.question} />
            }
            {
                game.playing && ready(game) &&
                <JustOneMainGuessing id={game.id} players={game.players} activePlayer={game.activePlayer} playing={game.playing} question={game.question} />
            }
    </Box>
  );
}

export default JustOneTeamPlay;