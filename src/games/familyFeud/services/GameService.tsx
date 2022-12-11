import axios from "axios";
import { Config } from "../../../config";
import { GameData } from "../types/GameData";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const GetGame = async () => {
    const response = await apiClient.get<GameData>("/familyfeud/game");
    return response.data;
  };

  const RevealAnswer = async (key: number) => {
    const response = await apiClient.post(`/familyfeud/game/answer/${key}`);
    return response.status;
  };

  const RevealQuestion = async () => {
    const response = await apiClient.post("/familyfeud/settings/question/show");
    return response.status;
  };

  const AddMistake = async () => {
    const response = await apiClient.post("/familyfeud/game/wrong");
    return response.status;
  };

  const RemoveMistake = async () => {
    const response = await apiClient.post("/familyfeud/game/wrong/undo");
    return response.status;
  };

  const ChooseQuestion = async (key: number) =>{
    const response = await apiClient.post(`/familyfeud/game/question/${key}`);
    return response.status;
  };

  const Finish = async () => {
    const response = await apiClient.post("/familyfeud/game/finish");
    return response.status;
  };
  
  const GameService = {
    GetGame,
    RevealAnswer,
    RevealQuestion,
    AddMistake,
    RemoveMistake,
    ChooseQuestion,
    Finish
  }
  
  export default GameService;