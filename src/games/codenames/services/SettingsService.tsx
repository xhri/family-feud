import axios from "axios";
import { Config } from "../../../config";
import { Settings } from "../types/Settings";
import { Word } from "../types/Word";


const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });
  
  const GetPassword = async () => {
    const response = await apiClient.get<Settings>("/codenames/settings");
    return response.data.password;
  };
  
  const SetPassword = async (pass: string) => {
    const response = await apiClient.post(`/codenames/settings/password/${pass}`);
    return response.status;
  };
  
  const SettingsService = {
    GetPassword,
    SetPassword
  }
  
  export default SettingsService;