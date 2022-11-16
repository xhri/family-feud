import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import GameService from '../../../services/GameService';
import { QuestionDialogProps } from '../../../types/props/QuestionDialogProps';

function QuestionDialog(props : QuestionDialogProps) {

  const chooseQuestion = () => {
    GameService.ChooseQuestion(props.question.id);
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth>
        <DialogTitle>Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.question.value}
          </DialogContentText>
          <DialogContentText>
            <ul>
              {props.question.answers.map(a=><li>{a.value}  -  {a.points}</li>)}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={chooseQuestion}>Choose questionn</Button>
        </DialogActions>
      </Dialog>
  );
}

export default QuestionDialog;