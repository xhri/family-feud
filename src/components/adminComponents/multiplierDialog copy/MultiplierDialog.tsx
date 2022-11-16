import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import SettingsService from '../../../services/SettingsService';
import { OpenableProps } from '../../../types/props/OpenableProps';

function MultiplierDialog(props : OpenableProps) {

  const [value, setValue] = useState(1);

  const doChange = async () => {
    SettingsService.SetMultiplier(value);
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
        <DialogTitle>Set multiplier</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Set multiplier.
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleFieldChange}
            value={value}
            margin="dense"
            label="Multiplier"
            type="number"
            fullWidth
            variant="standard"
            onKeyUp={handleEnterClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={doChange}>Set</Button>
        </DialogActions>
      </Dialog>
  );
}

export default MultiplierDialog;