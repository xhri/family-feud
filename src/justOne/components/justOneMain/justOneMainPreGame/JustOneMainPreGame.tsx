import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GameService from '../../../services/GameService';
import { Game } from '../../../types/Game';
import WordList from '../wordList/WordList';


function JustOneMainPreGame(props: Game) {
    

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
                    <p>Gracze:</p>
                </Box>
            </Grid>
                <WordList words={props.players.map(p => p.name)} />
            <Grid item xs={6} >
                <Box
                    sx={{
                        minHeight:'18vh'
                    }}>
                    <Button
                        variant="outlined"
                        onClick={GameService.StartGame}
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

export default JustOneMainPreGame;