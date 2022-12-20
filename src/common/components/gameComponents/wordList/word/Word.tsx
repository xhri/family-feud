import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { WordProps } from './WordProps';


function Word(props: WordProps) {


  return (
    <Box
        sx ={{
        bgcolor: 'background.paper',
        padding:'1vh',
        boxShadow: 2,
        borderRadius: 2,
        fontWeight: 'medium',
        fontSize: '2.2vw'
        }}>
            <p>{props.word}</p>
    </Box>
  );
}

export default Word;