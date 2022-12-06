import { Question } from "../Question";
import { OpenableProps } from "./OpenableProps";

export interface QuestionDialogProps extends OpenableProps 
{
    question: Question;
};