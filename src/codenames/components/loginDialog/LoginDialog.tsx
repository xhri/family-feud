import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { ChangeEvent, useState } from 'react';
import { AdminContext } from '../../../contexts/AdminContext';
import { LoginDialogProps } from '../../types/Props/LoginDialogProps';

function LoginDialog(props : LoginDialogProps) {

  const { setAuthenticated } = useContext(AdminContext);
  const [wrongPassword, setWrongPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  const handleEnterClick = async (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter"){
      await startAdminMode();
    }
  };

  const startAdminMode = () => {
    if (password == props.password){
      setAuthenticated(true);
      props.onClose();
    }else{
      setWrongPassword(true);
    }
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth sx={{minWidth:400}}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            error={wrongPassword}
            helperText={wrongPassword?'Wrong password':''}
            onChange={handleFieldChange}
            value={password}
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onKeyUp={handleEnterClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button onClick={startAdminMode}>Login</Button>
        </DialogActions>
      </Dialog>
  );
}

export default LoginDialog;