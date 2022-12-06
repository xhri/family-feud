import { OpenableProps } from "./OpenableProps";

export interface DialogProps extends OpenableProps 
{
    title: string,
    description: string,
    label: string,
    actionButtonName:string
};