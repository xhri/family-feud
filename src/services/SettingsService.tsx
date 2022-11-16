import axios from "axios";
import { Config } from "../config";
import { GameData } from "../types/GameData";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const SoundOn = async () => {
    const response = await apiClient.post("/settings/sound/on");
    return response.status;
  };

  const SoundOff = async () => {
    const response = await apiClient.post("/settings/sound/off");
    return response.status;
  };

  const SetMultiplier = async (multiplier: number) => {
    const response = await apiClient.post(`/settings/multiplier/${multiplier}`);
    return response.status;
  };
  
  const SettingsService = {
    SoundOn,
    SoundOff,
    SetMultiplier
  };
  
  export default SettingsService;