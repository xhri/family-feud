import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Config } from '../../../../../config';
import { PlayerLabelProps } from './PlayerLabelProps';


export function PlayerLabel(props: PlayerLabelProps) {


  return (
    <Box
        sx ={{
        bgcolor: props.active ? Config.blueColor :'background.paper',
        padding:'0.5vh',
        boxShadow: 2,
        borderRadius: 2,
        fontSize: '1vw'
        }}>
            <p>{props.name}</p>
            <p>{props.points}</p>
    </Box>
  );
}