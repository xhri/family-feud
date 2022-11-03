import { createContext } from "react";
import { Settings } from "../types/Settings";

export const SettingsContext = createContext<Settings>({break:false, soundOff:false, startSoundCounter:0, pointsMultiplier:1, hideQuestion:false})