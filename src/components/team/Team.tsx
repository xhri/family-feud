import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import TeamsService from '../../services/TeamsService';
import { TeamProps } from './TeamProps';

function Team(props : TeamProps) {
  const { authenticated } = useContext(AdminContext);
  
  const chooseTeam = async () => {      
    await TeamsService.ChooseTeam(props.id)
  };
  
  return (
    <Box
      onClick={authenticated?chooseTeam:()=>{}}
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
    </Box>
  );
}

export default Team;