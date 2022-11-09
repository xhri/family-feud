import React, { useContext } from 'react';
import QuestionProps from './QuestionProps';
import { SettingsContext } from '../../contexts/SettingsContext';
import { Box, Grid } from '@mui/material';
import { AdminContext } from '../../contexts/AdminContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GameService from '../../services/GameService';

function Question(props : QuestionProps) {
  const { authenticated } = useContext(AdminContext);
  const settings = useContext(SettingsContext);
  const toogleQuestion = async () => {
    if (settings.hideQuestion)
      await GameService.RevealQuestion();
  };
  return (
    <Grid container justifyContent="center" sx={{marginBottom:'2%'}}>
      <Box
        onClick={authenticated?toogleQuestion:()=>{}}
        sx={{
          bgcolor: 'background.paper',
          transition: !authenticated ? 'color 4s':'',
          color: !settings.hideQuestion || authenticated ? 'text.primary' : 'background.paper',
          boxShadow: 2,
          borderRadius: 2,
          minWidth: 300,
          fontSize: 28,
          fontWeight: 'medium',
          minHeight: '1.5em',
          width: '100%',
          p: 1,
          marginTop: '2%'
        }}>
          {authenticated && 
          <Box sx={{width: '10%', display: 'inline-block'}}>
            {settings.hideQuestion ? <VisibilityOffIcon/> : <VisibilityIcon/>}
          </Box>}

          <Box sx={{width: '90%', display: 'inline-block'}}>
            {!settings.hideQuestion || authenticated ? props.question : ''}
          </Box>
      </Box>
    </Grid>
  );
}

export default Question;