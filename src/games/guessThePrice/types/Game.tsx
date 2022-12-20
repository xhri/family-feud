import { Player } from "./Player";
import { Question } from "./Question";

export interface Game {
  players: Player[],
  playing: boolean,
  guessing: boolean,
  question: Question
  }