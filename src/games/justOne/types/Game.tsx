import { Team } from "./Team";
import { TeamGame } from "./TeamGame";

export interface Game {
  teams: Team[],
  activeTeam: number,
  playing: boolean,
  teamGames: TeamGame[]
  }