import { Answer } from "./Answer";
import { Team } from "./Team";

export interface GameData {
    question: string,
    answers: Array<Answer>,
    break: boolean,
    teams: Array<Team>,
    mistakes: number
  }