import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { GameChooserProps } from '../GameChooserProps';

export function GameChooserElement(props: GameChooserProps) {
    if (props.currentType == props.type)
        return props.children
    else
        return (<></>);
}