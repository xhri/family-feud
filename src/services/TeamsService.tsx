import axios from "axios";
import { Config } from "../config";
import { GameData } from "../types/GameData";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const ChooseTeam = async (key: number) => {
    const response = await apiClient.post(`/teams/play/${key}`);
    return response.status;
  }

  const TeamsService = {
    ChooseTeam,
  }
  
  export default TeamsService;