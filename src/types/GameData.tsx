import Answer from "./Answer";
import Team from "./Team";

export default interface GameData {
    question: string,
    answers: Array<Answer>,
    break: boolean,
    points: Array<Team>,
    activeTeam: number,
    wrong: number
  }