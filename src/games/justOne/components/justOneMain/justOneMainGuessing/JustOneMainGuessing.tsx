import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Timer from '../../../../../common/components/timer/Timer';
import { Config } from '../../../../../config';
import GameService from '../../../services/GameService';
import { Game } from '../../../types/Game';
import Word from '../word/Word';
import WordList from '../wordList/WordList';


function JustOneMainGuessing(props: Game) {
    
    const [show, setShow] = useState(false);

    const chooseWords = (game: Game) => {
        let result: string [] = [];
        let words = game.players.filter(p => p.name != game.activePlayer).map(p => p.word);
        
        words.forEach((element, i) => {
            result[i] = String(element);
        });

        for (let i = 0; i < words.length; i++) {
            for (let j=0;j < words.length; j++){
                if (j!=i){
                    if (sameWords(String(words[i]), String(words[j]))){
                        result = result.filter(x => x != String(words[i]));
                        break;
                    }
                }
            }
        }

        return result;
    };

    const sameWords = (word1: string, word2: string) => {
        let w1 = normalize(word1);
        let w2 = normalize(word2);
        if(w1 == w2)
            return true;
        
        // liczba mnoga
        if(w1.length > 3 && w2.length > 3 && 
            (w1.concat("ie") == w2 || w2.concat("ie") == w1
        || w1.concat("y") == w2 || w2.concat("y") == w1
        || w1.concat("e") == w2 || w2.concat("e") == w1))
            return true;


        return false;
    };

    const normalize = (s:string) => s
        .toLowerCase()
        .replace("ó","o")
        .replace("ą","a")
        .replace("ę","e")
        .replace("ś","s")
        .replace("ń","n")
        .replace("ć","c")
        .replace("ź","z")
        .replace("ż","z")
        .replace("ł","l");


    const buttonClick = async () => {
        if (show){
            await GameService.NextTurn();
        }else{
            setShow(true);
        }
    };

  return (
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
           
            <Grid item xs={2} >
                <Timer seconds={Config.JustOne.TimerSecondsGuessing} actionOnEnd={() => setShow(true) } redTimerMark={Config.JustOne.TimerRedMark} doAction={Config.JustOne.GuessOnTimer} />
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
                    <p>Zgaduje {props.activePlayer},  { show ? 'hasło' : 'słowa'}:</p>
                </Box>
            </Grid>
            <Grid item xs={2} >
                <Box sx={{ minHeight:'18vh' }} />
            </Grid>
            
            { show ? <><Grid item xs={2} /><Grid item xs={2}><Box sx={{minHeight:'18vh'}}><Word word={String(props.question)}/></Box></Grid><Grid item xs={6} ><Box sx={{minHeight:'18vh'}} /></Grid></> : <WordList words={chooseWords(props)} />}            
            
            <Grid item xs={6} >
                <Box
                    sx={{
                        minHeight:'18vh'
                    }}>
                    <Button
                        variant="outlined"
                        onClick={buttonClick}
                        sx={{
                            minHeight:'10vh',
                            width: '50%'
                        }}>
                            { show ? "Następna tura!" : "Pokaż hasło!" }
                    </Button>
                </Box>
            </Grid>
    </Grid>
  );
}

export default JustOneMainGuessing;