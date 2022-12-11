import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { ChangeEvent, useContext } from 'react';
import { AdminContext } from '../../../../common/contexts/AdminContext';
import TeamsService from '../../services/TeamsService';
import { Team as TeamProps } from '../../types/Team';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import AddPointsDialog from '../adminComponents/dialogs/AddPointsDialog';
import RemovePointsDialog from '../adminComponents/dialogs/RemovePointsDialog';

function Team(props : TeamProps) {
  const { authenticated } = useContext(AdminContext);
  const [removeTeamOpen, setRemoveTeamOpen] = React.useState(false);
  const [addPointsOpen, setAddPointsOpen] = React.useState(false);
  const [removePointsOpen, setRemovePointsOpen] = React.useState(false);
  
  const toggleAddPointsOpen = () => setAddPointsOpen(x => !x);
  const toggleRemovePointsOpen = () => setRemovePointsOpen(x => !x);


  const showRemoveTeam = () => {
    setRemoveTeamOpen(true);
  };

  const handleCloseRemoveTeam = () => {
    setRemoveTeamOpen(false);
  };

  const removeTeam = async () => {
    await TeamsService.RemoveTeam(props.id);
    handleCloseRemoveTeam();
  };

  const chooseTeam = async () => {      
    await TeamsService.ChooseTeam(props.id)
  };

  
  return (
    <>
      <Box
        sx={{
          bgcolor: props.active?'secondary.main':'background.paper',
          color: 'text.primary',
          boxShadow: 2,
          borderRadius: 2,
          minWidth: 300,
          fontSize: 28,
          width: '23%',
          margin: '1%',
          fontWeight: 'medium',
          minHeight: '1.5em',
          display: 'inline-block'
        }}>
        <Box>
          {props.name}
        </Box>
        <Box>
          {props.points}
        </Box>
        {
          authenticated &&
          <Box>
            <Box>
              <Button onClick={chooseTeam}>{props.active?<ToggleOnIcon/>:<ToggleOffIcon/>}Make Active</Button>
            </Box>
            <Box>
              <Button onClick={showRemoveTeam}><DeleteIcon/>Remove team</Button>
            </Box>
            <Box>
              <Button onClick={toggleAddPointsOpen}><AddIcon/>Add points</Button>
              <Button onClick={toggleRemovePointsOpen}><RemoveIcon/>Remove points</Button>
            </Box>
          </Box>
        }
      </Box>
      {/* AreYouSureDialog */}
      <Dialog open={removeTeamOpen} onClose={handleCloseRemoveTeam}>
        <DialogTitle>Remove team</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove team {props.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemoveTeam}>Cancel</Button>
          <Button onClick={removeTeam}>Remove</Button>
        </DialogActions>
      </Dialog>

      <AddPointsDialog teamNumber={props.id} open={addPointsOpen} onClose={toggleAddPointsOpen} />
      <RemovePointsDialog teamNumber={props.id} open={removePointsOpen} onClose={toggleRemovePointsOpen} />
    </>
  );
}

export default Team;