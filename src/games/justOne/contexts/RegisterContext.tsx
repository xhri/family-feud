import { createContext } from "react";

export const RegisterContext = createContext({name: "", team: 0, setName: (name: string) => {}, setTeam: (team: number) => {}});