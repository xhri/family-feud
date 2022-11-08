import axios from "axios";
import { Config } from "../config";
import { GameData } from "../types/GameData";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const GetGame = async () => {
    const response = await apiClient.get<GameData>("/game");
    return response.data;
  } 

  const GameService = {
    GetGame
  }
  
  export default GameService;