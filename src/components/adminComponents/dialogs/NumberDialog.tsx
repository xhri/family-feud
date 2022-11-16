import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { NumberDialogProps } from '../../../types/props/NumberDialogProps';

function NumberDialog(props : NumberDialogProps) {

  const [value, setValue] = useState(props.defaultValue);

  const doChange = async () => {
    await props.action(value);
    props.onClose();
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(+event.target.value);
  };

  const handleEnterClick = async (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter"){
      await doChange();
    }
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} sx={{minWidth:300}}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleFieldChange}
            value={value}
            margin="dense"
            label={props.label}
            type="number"
            fullWidth
            variant="standard"
            onKeyUp={handleEnterClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={doChange}>{props.actionButtonName}</Button>
        </DialogActions>
      </Dialog>
  );
}

export default NumberDialog;