import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GameService from '../../../services/GameService';
import { Game } from '../../../types/Game';
import { TeamGame } from '../../../types/TeamGame';
import WordList from '../../../../../common/components/gameComponents/wordList/WordList';
import { WaitingForPlayers } from '../../../../../common/components/gameComponents/waitingForPlayers/WaitingForPlayers';


function JustOneAddTeam(props: Game) {
    
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
            <WaitingForPlayers label={'Drużyny:'} players={props.teams.map(t => t.name)} start={GameService.StartGame} />
    </Box>
  );
}

export default JustOneAddTeam;