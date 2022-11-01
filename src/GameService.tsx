import axios from "axios";
import { GameData } from "./types/GameData";

const apiClient = axios.create({
    baseURL: "http://localhost:5000",
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