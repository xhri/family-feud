import { Answer } from "./Answer";
import { Settings } from "./Settings";
import { Team } from "./Team";

export interface GameData {
    question: string,
    answers: Array<Answer>,
    teams: Array<Team>,
    settings: Settings
    mistakes: number
  }