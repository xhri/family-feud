import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { ChangeEvent, useContext } from 'react';
import { useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { GameType } from '../gameChooser/GameType';
import { LoginScreenProps } from './LoginScreenProps';

function LoginScreen(props: LoginScreenProps) {

    const { setGame } = useContext(GameContext);
    const [authenticated, setAuthenticated] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const [wrongPassword, setWrongPassword] = React.useState(false);
    const [password, setPassword] = React.useState("");

    const handleClose = () => {
        setGame(GameType.None);
        setWrongPassword(false);
        setPassword('');
      };
    
    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
      };
    
    const startAdminMode = async () => {
        if (password == await props.getPassword()){
          setAuthenticated(true);
          
          setOpen(false);
          setWrongPassword(false);
          setPassword('');
        }else{
          setWrongPassword(true);
        }
      };
    
    const handleEnterClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key == "Enter"){
          startAdminMode();
        }
      };

  return (
    <>
        <Dialog open={open} onClose={handleClose} fullWidth sx={{minWidth:400}}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    error={wrongPassword}
                    helperText={wrongPassword?'Wrong password':''}
                    onChange={handleTextFieldChange}
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
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={startAdminMode}>Login</Button>
            </DialogActions>
        </Dialog>
        {
            authenticated &&
            props.children
        }
    </>
  );
}

export default LoginScreen;