import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { GameChooserProps } from '../GameChooserProps';

export function GameChooserListElement(props: GameChooserProps) {
  return (
    <ListItem disablePadding>
        <ListItemButton onClick={props.onClick}>
            <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary={props.label} />
        </ListItemButton>
    </ListItem>
    );
}