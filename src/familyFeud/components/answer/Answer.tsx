import React, { useContext, useEffect } from 'react';
import correct from "../../assets/correct.mp3";
import { SettingsContext } from '../../contexts/SettingsContext';
import { AdminContext } from '../../../contexts/AdminContext';
import { Box, Grid } from '@mui/material';
import GameService from '../../services/GameService';
import { Answer as AnswerProps } from '../../types/Answer';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Answer(props : AnswerProps) {
  
  const { authenticated } = useContext(AdminContext);
  let audio = new Audio(correct);
  const settings = useContext(SettingsContext);
  const revealAnswer = async () => { await GameService.RevealAnswer(props.id)};
  useEffect(()=>{
    if (props.answered && !settings.soundOff && !authenticated){
      audio.play();
    }
  }, [props.answered])

  return (
    <Grid container justifyContent="center" sx={{marginBottom:'2%'}}>
      <Box
        onClick={authenticated?revealAnswer:()=>{}}
        sx={{
          bgcolor: props.answered?'primary.light':'background.paper',
          transition: !authenticated?'background-color 4s, color 4s':'',
          color: props.answered||authenticated?'text.primary':'background.paper',
          boxShadow: 2,
          borderRadius: 2,
          minWidth: 300,
          fontSize: 28,
          width: '80%',
          fontWeight: 'medium',
          minHeight: '1.5em'
        }}>
        {authenticated && !props.answered &&
          <Box
            sx={{
              display: 'inline-block',
              width: '10%',
            }}>
            <VisibilityOffIcon/>
          </Box>}
        <Box 
          sx={{
            fontSize: 25,  
            p: 1,
            display: 'inline-block',
            width: '75%',
          }}>
          {props.answered || authenticated ? props.value : ''}
        </Box>
        <Box 
          sx={{         
            display: 'inline-block',
            p: 1,       
          }}>
          {props.answered || authenticated ? props.points : ''}
        </Box>
      </Box>
    </Grid>
  );
}

export default Answer;