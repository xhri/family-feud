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

  const AddTeam = async (name: string) => {
    const response = await apiClient.post(`/teams/add/${name}`);
    return response.status;
  }  
  
  const RemoveTeam = async (key: number) => {
    const response = await apiClient.post(`/teams/remove/${key}`);
    return response.status;
  }

  const TeamsService = {
    ChooseTeam,
    AddTeam,
    RemoveTeam
  }
  
  export default TeamsService;