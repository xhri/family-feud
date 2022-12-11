import { Player } from "./Player";

export interface Game {
  players: Player[],
  activePlayer: string | undefined,
  playing: boolean,
  question: string | undefined
  }