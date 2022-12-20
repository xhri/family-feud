import { createContext } from "react";
import { GameType } from "../components/gameChooser/GameType";

export const GameContext = createContext({game:GameType.None, setGame: (game: GameType) => {}})