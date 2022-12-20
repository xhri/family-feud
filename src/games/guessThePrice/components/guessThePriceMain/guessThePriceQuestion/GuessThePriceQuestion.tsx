import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Players } from '../../../../../common/components/gameComponents/players/Players';
import { Game } from '../../../types/Game';
import { PlayerLabelProps } from '../../../../../common/components/gameComponents/players/playerLabel/PlayerLabelProps';
import { Config } from '../../../../../config';
import Timer from '../../../../../common/components/gameComponents/timer/Timer';
import GameService from '../../../services/GameService';


export function GuessThePriceQuestion(props: Game) {
    
    const getPlayers = () => {
        return props.players.map(p => ({name:p.name, active:p.answer > 0, points:p.points}));
    };

    const getPictureLink = () => {
        return Config.ApiUrl + "/guesstheprice/game/picture/" + String(props.question.id);
    };

  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
        <Players players={getPlayers()} />
        <Grid item xs={4} >
            <Box
                sx ={{
                    bgcolor: 'background.paper',
                    boxShadow: 2,
                    borderRadius: 2,
                    fontSize: '2vw',
                    minHeight:'12vh'
                }}>
                    {props.question.nameCategory}
                    <p>{props.question.offerName}</p>
            </Box>
        </Grid>
        <Grid item xs={2} >
            <Timer height="12vh" seconds={Config.GuessThePrice.TimerSecondsGuessingGTP} actionOnEnd={GameService.TimesUp} redTimerMark={Config.GuessThePrice.TimerRedMarkGTP} doAction={Config.GuessThePrice.GuessOnTimerGTP} />
        </Grid>
        <Grid item xs={6} >
            <Box sx ={{ height:'50vh' }}>
                    <img src={getPictureLink()} style={{height: "50vh"}} />
            </Box>
        </Grid>

    </Grid>
  );
}