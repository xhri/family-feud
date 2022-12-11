import { createContext } from "react";

export const AdminContext = createContext({authenticated:false, setAuthenticated: (auth: boolean) => {}})