import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Players } from '../../../../../common/components/gameComponents/players/Players';
import { Game } from '../../../types/Game';
import { PlayerLabelProps } from '../../../../../common/components/gameComponents/players/playerLabel/PlayerLabelProps';
import { Config } from '../../../../../config';
import GameService from '../../../services/GameService';


export function GuessThePriceAnswer(props: Game) {
    
    const getPlayers = () => {
        return props.players.map(p => ({name:p.name, active:false, points:p.points}));
    };

    const getPictureLink = () => {
        return Config.ApiUrl + "/guesstheprice/game/picture/" + String(props.question.id);
    };

  return (
    <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
        <Players players={getPlayers()} />
        <Grid item xs={6} >
            <Box
                sx ={{
                    bgcolor: 'background.paper',
                    boxShadow: 2,
                    borderRadius: 2,
                    fontSize: '2vw',
                    minHeight:'15vh'
                }}>
                    <p>{props.question.nameCategory}</p>
                    <p>{props.question.offerName}</p>
                    <p>{props.question.price}</p>
            </Box>
        </Grid>
        
        <Grid item xs={6} >
            <Box
                sx={{
                    minHeight:'18vh'
                }}>
                <Button
                    variant="outlined"
                    onClick={GameService.NextTurn}
                    sx={{
                        minHeight:'10vh',
                        width: '50%'
                    }}>
                        Next Turn!
                </Button>
            </Box>
        </Grid>
    </Grid>
  );
}