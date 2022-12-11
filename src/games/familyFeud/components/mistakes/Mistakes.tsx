import React, { useContext, useEffect } from 'react';
import { MistakesProps } from './MistakesProps';
import './Mistakes.css';
import mistake from "../../assets/mistake.mp3";
import { SettingsContext } from '../../contexts/SettingsContext';
import { AdminContext } from '../../../../common/contexts/AdminContext';
import { Box, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import GameService from '../../services/GameService';

function Mistakes(props : MistakesProps) {
  let audio = new Audio(mistake);
  const settings = useContext(SettingsContext);
  const { authenticated } = useContext(AdminContext);
  const elements= []
  for (let i=0;i<props.mistakes;i++) {
    elements.push(
      <img className="Mistakes" src={require("../../assets/cross.png")} />
    )}
    
  useEffect(() => {
    if (props.mistakes != 0 && !settings.soundOff && !authenticated)
      audio.play()
  },[props.mistakes])
  
  return (
    <Box>
        {
          authenticated &&
          <Box>
            <Button onClick={GameService.AddMistake}><CancelIcon/>Add mistake</Button>
            <Button onClick={GameService.RemoveMistake}><CancelIcon/>Remove mistake</Button>
          </Box>
        }
      <Box>{elements}</Box>
    </Box>
  );
}

export default Mistakes;