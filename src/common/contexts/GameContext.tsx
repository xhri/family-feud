import { createContext } from "react";
import { GameType } from "../types/GameType";

export const GameContext = createContext({game:GameType.None, setGame: (game: GameType) => {}})