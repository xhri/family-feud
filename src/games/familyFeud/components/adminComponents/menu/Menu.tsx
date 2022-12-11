import React, { useContext } from 'react';
import { SettingsContext } from '../../../contexts/SettingsContext';
import Button from '@mui/material/Button';
import { AdminContext } from '../../../../../common/contexts/AdminContext';
import AddIcon from '@mui/icons-material/Add';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import SettingsService from '../../../services/SettingsService';
import QuestionsDrawer from '../questionsDrawer/QuestionsDrawer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MultiplierDialog from '../dialogs/MultiplierDialog';
import CloseIcon from '@mui/icons-material/Close';
import AddTeamDialog from '../dialogs/AddTeamDialog';

function Menu() {
  const settings = useContext(SettingsContext);
  const { authenticated } = useContext(AdminContext);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [questionDrawerOpen, setQuestionDrawerOpen] = React.useState(false);
  const [multiplierDialogOpen, setMultiplierDialogOpen] = React.useState(false);
  const [addTeamOpen, setAddTeamOpen] = React.useState(false);
  
  const toggleAddTeam = () => {
    setAddTeamOpen(x => !x);
  };

  const toggleDrawer = () => {
    setDrawerOpen(x => !x);
  };

  const toggleQuestionsDrawer = () => {
    setQuestionDrawerOpen(x => !x);
  };

  const toggleMultiplierDialog = () => {
    setMultiplierDialogOpen(x => !x);
  };
  
  const toggleSound = () => {
    if (settings.soundOff){
      SettingsService.SoundOn();
    }else{
      SettingsService.SoundOff();
    }
  };

  return (
    <Box
        sx={{
            position: 'absolute',
            top: '2%',
            left: '2%',
            zIndex: 3,
        }}>
      {
        authenticated &&
        <Button variant="outlined" onClick={toggleDrawer}>Menu</Button>
      }

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
                  <ListItemButton onClick={toggleAddTeam}>
                  <ListItemIcon><AddIcon/></ListItemIcon>
                    <ListItemText primary="Add team" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={toggleQuestionsDrawer}>
                    <ListItemIcon><QuestionMarkIcon/></ListItemIcon>
                    <ListItemText primary="Questions" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={toggleMultiplierDialog}>
                    <ListItemIcon><CloseIcon/></ListItemIcon>
                    <ListItemText primary="Set multiplier" />
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
          </Box>
      </Drawer>

      <MultiplierDialog open={multiplierDialogOpen} onClose={toggleMultiplierDialog}/>
      <QuestionsDrawer open={questionDrawerOpen} onClose={toggleQuestionsDrawer}/>
      <AddTeamDialog open={addTeamOpen} onClose={toggleAddTeam} />

    </Box>
  );
}

export default Menu;