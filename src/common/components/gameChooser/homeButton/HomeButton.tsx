import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { GameChooserProps } from '../GameChooserProps';
import HomeIcon from '@mui/icons-material/Home';

export function HomeButton(props: GameChooserProps) {
  return (
    <Box
        sx={{
            position: 'absolute',
            top: '0.5%',
            left: '0.5%',
            zIndex: 5,
        }}>
            {
                props.currentType != props.type &&
                <HomeIcon onClick={props.onClick} />
            }      
    </Box>
    );
}