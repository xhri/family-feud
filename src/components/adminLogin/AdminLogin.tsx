import React, { ChangeEvent, ChangeEventHandler, useContext } from 'react';
import './AdminLogin.css';
import { SettingsContext } from '../../contexts/SettingsContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import { Config } from '../../config';
import { AdminContext } from '../../contexts/AdminContext';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import TeamsService from '../../services/TeamsService';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import SettingsService from '../../services/SettingsService';

function AdminLogin() {
  const settings = useContext(SettingsContext);
  const { authenticated, setAuthenticated } = useContext(AdminContext);
  const [open, setOpen] = React.useState(false);
  const [wrongPassword, setWrongPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // AddTeam
  const [addTeamOpen, setAddTeamOpen] = React.useState(false);
  const [teamName, setTeamName] = React.useState("");
  
  const showAddTeam = () => {
    setAddTeamOpen(true);
  };

  const handleTeamNameFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTeamName(event.target.value);
  }

  const handleCloseAddTeam = () => {
    setAddTeamOpen(false);
    setTeamName('');
  };

  const addTeam = async () => {
    await TeamsService.AddTeam(teamName);
    handleCloseAddTeam();
  };
  // End


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
  }

  const startAdminMode = () => {
    if (password == Config.Password){
      setAuthenticated(true);
      handleClose();
    }else{
      setWrongPassword(true);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(x => !x);
  }

  const Logout = () => {
    setAuthenticated(false);
  };

  const handleEnterClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == "Enter"){
      startAdminMode();
    }
  }

  const toggleSound = () => {
    if (settings.soundOff){
      SettingsService.SoundOn();
    }else{
      SettingsService.SoundOff();
    }
  };

  return (
    <div className="AdminLogin">
      {authenticated?<Button variant="outlined" onClick={toggleDrawer}>Menu</Button>:<Button variant="outlined" onClick={handleClickOpen}>Admin</Button>}
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
      <Drawer
            anchor='left'
            open={drawerOpen}
            onClose={toggleDrawer}
          >
          <Box
            sx={{
              width: 300
            }}>
            <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={showAddTeam}>
                  <ListItemIcon><AddIcon/></ListItemIcon>
                    <ListItemText primary="Add team" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Reset teams" />
                  </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={toggleSound}>
                    <ListItemText primary="Sound" />
                  <ListItemIcon>{settings.soundOff?<ToggleOffIcon/>:<ToggleOnIcon/>}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={Logout}>
                  <ListItemIcon><LogoutIcon/></ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
            </List>
          </Box>
      </Drawer>
      {/* AddTeamDialog */}
      <Dialog open={addTeamOpen} onClose={handleCloseAddTeam}>
        <DialogTitle>Add team</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give team name
          </DialogContentText>
          <TextField
            autoFocus
            onChange={handleTeamNameFieldChange}
            value={teamName}
            margin="dense"
            id="name"
            label="Team name"
            type="text"
            fullWidth
            variant="standard"
            //onKeyUp={handleEnterClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddTeam}>Cancel</Button>
          <Button onClick={addTeam}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminLogin;