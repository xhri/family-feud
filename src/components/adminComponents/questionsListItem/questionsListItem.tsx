import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Question } from '../../../types/Question';
import QuestionDialog from '../dialogs/QuestionDialog';

function QuestionsListItem(props : Question) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(x =>!x);
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={toggleOpen}>
        <ListItemText primary={props.value} />
      </ListItemButton>
      <QuestionDialog question={props} open={open} onClose={toggleOpen} />
    </ListItem>
  );
}

export default QuestionsListItem;