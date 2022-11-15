import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useContext } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import TeamsService from '../../services/TeamsService';
import { TeamProps } from './TeamProps';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function Team(props : TeamProps) {
  const { authenticated } = useContext(AdminContext);
  const [removeTeamOpen, setRemoveTeamOpen] = React.useState(false);
  const [addPointsOpen, setAddPointsOpen] = React.useState(false);
  const [removePointsOpen, setRemovePointsOpen] = React.useState(false);
  
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



  const showAddPoints = () => {
    setAddPointsOpen(true);
  };

  const handleCloseAddPoints = () => {
    setAddPointsOpen(false);
  };

  const addPoints = async () => {
    //await TeamsService.RemoveTeam(props.id);
    handleCloseAddPoints();
  };



  const showRemovePoints = () => {
    setRemovePointsOpen(true);
  };

  const handleCloseRemovePoints = () => {
    setRemovePointsOpen(false);
  };

  const removePoints = async () => {
    //await TeamsService.RemoveTeam(props.id);
    handleCloseRemovePoints();
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
              <Button onClick={showAddPoints}><AddIcon/>Add points</Button>
              <Button onClick={showRemovePoints}><RemoveIcon/>Remove points</Button>
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
      {/* AddPointsDialog */}
      <Dialog open={addPointsOpen} onClose={handleCloseAddPoints}>
        <DialogTitle>Add points</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove team {props.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddPoints}>Cancel</Button>
          <Button onClick={addPoints}>Add</Button>
        </DialogActions>
      </Dialog>
      {/* RemovePointsDialog */}
      <Dialog open={removePointsOpen} onClose={handleCloseRemovePoints}>
        <DialogTitle>Remove points</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want t
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRemovePoints}>Cancel</Button>
          <Button onClick={removePoints}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Team;