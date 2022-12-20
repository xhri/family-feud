import { GameType } from "./GameType";

export interface GameChooserProps {
    label: string,
    type: GameType,
    currentType: GameType,
    onClick: () => void,
    children: JSX.Element
    }