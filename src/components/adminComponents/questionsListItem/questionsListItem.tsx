import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Question } from '../../../types/Question';

function QuestionsListItem(props : Question) {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={()=>{}}>
        <ListItemText primary={props.value} />
      </ListItemButton>
    </ListItem>
  );
}

export default QuestionsListItem;