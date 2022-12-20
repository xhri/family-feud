import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WordList from '../wordList/WordList';
import { WaitingForPlayersProps } from './WaitingForPlayersProps';


export function WaitingForPlayers(props: WaitingForPlayersProps) {
    

  return (
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
            <Grid item xs={6} >
                <Box
                    sx={{
                        minHeight:'18vh',
                        bgcolor: 'background.paper',
                        padding:'1vh',
                        boxShadow: 2,
                        borderRadius: 2,
                        fontWeight: 'medium',
                        fontSize: '2.2vw',
                        marginLeft: '30vw',
                        marginRight: '30vw'
                    }}>
                    <p>{props.label}</p>
                </Box>
            </Grid>
                <WordList words={props.players} />
            <Grid item xs={6} >
                <Box
                    sx={{
                        minHeight:'18vh'
                    }}>
                    <Button
                        variant="outlined"
                        onClick={props.start}
                        sx={{
                            minHeight:'10vh',
                            width: '50%'
                        }}>
                            Start!
                    </Button>
                </Box>
            </Grid>
    </Grid>
  );
}