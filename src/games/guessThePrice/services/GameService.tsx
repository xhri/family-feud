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
    const response = await apiClient.get<Game>("/guesstheprice/game");
    return response.data;
  };
  
  const StartGame = async () => {
    const response = await apiClient.post("/guesstheprice/game/startgame");
    return response.status;
  };
  
  const NextTurn = async () => {
    const response = await apiClient.post("/guesstheprice/game/nextturn");
    return response.status;
  };
  
  const TimesUp = async () => {
    const response = await apiClient.post("/guesstheprice/game/timesup");
    return response.status;
  };
  
  const AddPlayer = async (p: string) => {
    const response = await apiClient.post(`/guesstheprice/game/player/${p}`);
    return response.status;
  };
  
  const Answer = async (p: string, a: number) => {
    const response = await apiClient.post(`/guesstheprice/game/player/${p}/answer/${a}`);
    return response.status;
  };

  const GameService = {
    GetGame,
    StartGame,
    NextTurn,
    AddPlayer,
    TimesUp,
    Answer
  }
  
  export default GameService;