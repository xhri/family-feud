import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import TeamsService from '../../../services/TeamsService';
import { OpenableProps } from '../../../types/props/OpenableProps';

function AddTeamDialog(props : OpenableProps) {

  const [value, setValue] = useState("");

  const doChange = async () => {
    await TeamsService.AddTeam(value);
    props.onClose();
  };

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleEnterClick = async (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter"){
      await doChange();
    }
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth sx={{minWidth:400}}>
        <DialogTitle>Add team</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give team name.
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleFieldChange}
            value={value}
            margin="dense"
            label="Team name"
            type="text"
            fullWidth
            variant="standard"
            onKeyUp={handleEnterClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={doChange}>Add</Button>
        </DialogActions>
      </Dialog>
  );
}

export default AddTeamDialog;