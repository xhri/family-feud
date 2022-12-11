import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GameService from '../../services/GameService';
import { Word } from '../../types/Word';
import WordCard from '../wordCard/WordCard';


function Codenames() {
    
    const [game, setGame] = useState<Array<Word>>([]);

    useEffect(() => {
        const timer = setInterval(async () => {setGame(await GameService.GetGame())}, 1000);
        return () => clearTimeout(timer);
      }, []);

  

  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx ={{
            marginLeft:'20px',
            marginRight:'20px'
        }}>
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 5 }} >
            {game.map(g => (
                <Grid item xs={1} key={g.id}>
                    <WordCard id={g.id} value={g.value} type={g.type} shown={g.shown} key={g.id}/>
                </Grid>
            ))}
        </Grid>
    </Box>
  );
}

export default Codenames;