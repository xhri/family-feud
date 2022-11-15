import { Answer } from "./Answer";

export interface Question {
    key: number,
    value: string,
    answers: Array<Answer>
  }