import { DialogProps } from "./DialogProps";

export interface NumberDialogProps extends DialogProps 
{
    action: (arg0: number) => Promise<number>,
    defaultValue: number
};