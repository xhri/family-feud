import { Answer } from "./Answer";

export interface Question {
    id: number,
    value: string,
    answers: Array<Answer>
  }