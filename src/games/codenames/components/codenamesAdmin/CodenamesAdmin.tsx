import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import GameService from '../../services/GameService';
import SettingsService from '../../services/SettingsService';


function CodenamesAdmin() {
    
    const [password, setPassword] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(x => !x);
    };
    
    const newGame = async () =>{
        await GameService.NewGame();
        toggleOpen();
    };

    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
      };
    
    const savePassword = async () => {
        SettingsService.SetPassword(password);
        toggleOpen();
      };
    
    const handleEnterClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key == "Enter"){
            savePassword();
        }
      };

  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx ={{
            marginLeft:'20px',
            marginRight:'20px'
        }}>
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 5 }} >
            <Grid item xs={5} >
                <Button sx={{width:'10%', minHeight:'10vh'}} variant="outlined" onClick={newGame}>New Game</Button>
            </Grid>
            <Grid item xs={4} >
                <TextField
                        sx={{
                            minHeight:'16vh'
                        }}
                        autoFocus
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
            </Grid>
            <Grid item xs={1} >
                <Button sx={{width:'90%', minHeight:'10vh'}} variant="outlined" onClick={savePassword}>Save password</Button>
            </Grid>
        </Grid>

        <Dialog
            open={open}
            onClose={toggleOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle >
                Changes saved!
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    All the changes have been saved!
                </DialogContentText>
            </DialogContent>
        </Dialog>
    </Box>
  );
}

export default CodenamesAdmin;