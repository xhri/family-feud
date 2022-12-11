import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Config } from '../../../../config';
import GameService from '../../services/GameService';
import { Word } from '../../types/Word';


function WordCard(props: Word) {
    
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
    <>
      {
        props.shown &&
        <Box
          sx ={{
            bgcolor: bgColor,
            padding:'1vh',
            boxShadow: 2,
            borderRadius: 2,
            fontWeight: 'medium',
            fontSize: '2.2vw',
            color: bgColor
          }}>
          <p>{props.value}</p>
        </Box>
      }
      {
        !props.shown &&
        <Box
          onClick={clickCard}
          sx ={{
            bgcolor: 'background.paper',
            padding:'1vh',
            boxShadow: 2,
            borderRadius: 2,
            fontWeight: 'medium',
            fontSize: '2.2vw'
          }}>
            <p>{props.value}</p>
        </Box>
      }
    </>
  );
}

export default WordCard;