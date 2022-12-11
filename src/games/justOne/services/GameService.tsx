import axios from "axios";
import { Config } from "../../../config";
import { Game } from "../types/Game";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const GetGame = async () => {
    const response = await apiClient.get<Game>("/justone/game");
    return response.data;
  };
  
  const StartGame = async () => {
    const response = await apiClient.post("/justone/game/startgame");
    return response.status;
  };
  
  const NextTurn = async () => {
    const response = await apiClient.post("/justone/game/nextturn");
    return response.status;
  };
  
  const AddPlayer = async (p: string) => {
    const response = await apiClient.post(`/justone/game/player/${p}`);
    return response.status;
  };
  
  const AddWord = async (p: string, word: string) => {
    const response = await apiClient.post(`/justone/game/addword/${p}/${word}`);
    return response.status;
  };
  
  const GameService = {
    GetGame,
    StartGame,
    NextTurn,
    AddPlayer,
    AddWord
  }
  
  export default GameService;