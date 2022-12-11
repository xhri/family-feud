import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Timer from '../../../../../common/components/timer/Timer';
import { Config } from '../../../../../config';
import GameService from '../../../services/GameService';
import { Game } from '../../../types/Game';
import WordList from '../wordList/WordList';


function JustOneMainGame(props: Game) {
    

  return (
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
            <Grid item xs={2} >
                <Box
                    sx={{
                        minHeight:'18vh'
                    }}>
                </Box>
            </Grid>
            <Grid item xs={2} >
                <Box
                    sx={{
                        minHeight:'18vh',
                        bgcolor: 'background.paper',
                        paddingTop:'1vh',
                        boxShadow: 2,
                        borderRadius: 2,
                        fontWeight: 'medium',
                        fontSize: '2.2vw'
                    }}>
                    <p>Zgaduje: {props.activePlayer}</p>
                </Box>
            </Grid>
            
            <Grid item xs={2} >
                <Timer seconds={Config.JustOne.TimerSecondsWriting} actionOnEnd={() => { } } redTimerMark={Config.JustOne.TimerRedMark} doAction={false} />
            </Grid>

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
                        marginLeft: '32vw',
                        marginRight: '32vw'
                    }}>
                    <p>Odpowiedzieli:</p>
                </Box>
            </Grid>
            
            <WordList words={props.players.filter(p => typeof p.word === 'string' && p.word.length > 1).map(p => p.name)} />
    </Grid>
  );
}

export default JustOneMainGame;