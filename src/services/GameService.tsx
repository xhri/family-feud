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

  const RevealAnswer = async (key: number) => {
    const response = await apiClient.post(`/game/answer/${key}`);
    return response.status;
  } 

  const RevealQuestion = async () => {
    const response = await apiClient.post("/settings/question/show");
    return response.status;
  }

  const GameService = {
    GetGame,
    RevealAnswer,
    RevealQuestion
  }
  
  export default GameService;