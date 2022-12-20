import { Player } from "./Player";

export interface TeamGame {
  id: number,
  players: Player[],
  activePlayer: string | undefined,
  playing: boolean,
  question: string | undefined
  }