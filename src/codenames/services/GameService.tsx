import axios from "axios";
import { Config } from "../../config";
import { Word } from "../types/Word";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const GetGame = async () => {
    const response = await apiClient.get<Array<Word>>("/codenames/game");
    return response.data;
  };

  const NewGame = async () => {
    const response = await apiClient.post("/codenames/game/newgame");
    return response.status;
  };

  const Select = async (id: number) => {
    const response = await apiClient.post(`/codenames/game/select/${id}`);
    return response.status;
  };
  
  const GameService = {
    GetGame,
    NewGame,
    Select
  }
  
  export default GameService;