import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Config } from '../../../config';
import GameService from '../../services/GameService';
import { Word } from '../../types/Word';


function CodenamesCaptainBox(props: Word) {
    
  const clickCard = async () =>{
    await GameService.Select(props.id);
  };

  let bgColor = Config.redColor;
  if (props.type == 1)
    bgColor = Config.blueColor;
  if (props.type == 2)
    bgColor = 'grey';
  if (props.type == 3)
    bgColor = 'black';

  return (
    <Box
        sx ={{
        bgcolor: bgColor,
        boxShadow: 2,
        borderRadius: 1,
        color: bgColor,
        minHeight: '12vh'
        }}>
    </Box>
     
  );
}

export default CodenamesCaptainBox;