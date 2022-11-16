import React, { ChangeEvent, ChangeEventHandler, useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import { Config } from '../../../config';
import { AdminContext } from '../../../contexts/AdminContext';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TeamsService from '../../../services/TeamsService';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import SettingsService from '../../../services/SettingsService';
import QuestionsDrawer from '../questionsDrawer/QuestionsDrawer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MultiplierDialog from '../dialogs/MultiplierDialog';
import CloseIcon from '@mui/icons-material/Close';
import AddTeamDialog from '../dialogs/AddTeamDialog';

function AdminLogin() {
  const settings = useContext(SettingsContext);
  const { authenticated, setAuthenticated } = useContext(AdminContext);
  const [open, setOpen] = React.useState(false);
  const [wrongPassword, setWrongPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setWrongPassword(false);
    setPassword('');
  };

  const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };

  const startAdminMode = () => {
    if (password == Config.Password){
      setAuthenticated(true);
      handleClose();
    }else{
      setWrongPassword(true);
    }
  };

  const Logout = () => {
    setAuthenticated(false);
  };

  const handleEnterClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter"){
      startAdminMode();
    }
  };

  return (
    <Box
        sx={{
            position: 'absolute',
            top: '2%',
            right: '2%',
            zIndex: 3,
        }}>
      {authenticated?<Button variant="outlined" onClick={Logout}>Logout</Button>:<Button variant="outlined" onClick={handleClickOpen}>Admin</Button>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Admin login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To run in administrator mode please provide password.
          </DialogContentText>
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
    </Box>
  );
}

export default AdminLogin;