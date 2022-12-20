import { Box, Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import AreYouSure from '../../../../../common/components/gameComponents/areYouSure/AreYouSure';
import { GuessThePricePhoneAnswerProps } from './GuessThePricePhoneAnswerProps';


export function GuessThePricePhoneAnswer(props: GuessThePricePhoneAnswerProps) {
    
    const [answer, setAnswer] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(x => !x);
    };
    
    const handleTextFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAnswer(+event.target.value);
      };
    
    const answerQuestion = async () => {
        if (answer > 0)
        {
            toggleOpen();
        }
      };

    const doChange = () => props.sendAnswer(answer);

    return (
            <>
                <AreYouSure open={open} description={props.dialogText(answer)} onClose={toggleOpen} onAccept={doChange} />
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 6 }} >
                    <Grid item xs={6} >
                        <Box
                            sx={{
                                minHeight:'25vh',
                                bgcolor: 'background.paper',
                                padding:'1vh',
                                boxShadow: 2,
                                borderRadius: 2,
                                fontWeight: 'medium',
                                fontSize: '8vh',
                                marginLeft: '5vw',
                                marginRight: '5vw'
                            }}>
                            <p>{props.mainText}</p>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box
                            sx={{
                                minHeight:'25vh',
                                marginLeft: '6vw',
                                marginRight: '6vw',
                                paddingTop: '3vh'
                            }}>
                                
                                <TextField
                                    sx={{
                                        minHeight:'12vh'
                                    }}
                                    autoFocus
                                    onChange={handleTextFieldChange}
                                    //value={answer}
                                    margin="dense"
                                    id="answer"
                                    label="Odpowiedź"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                />
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box
                            sx={{
                                minHeight:'25vh',
                                marginLeft: '5vw',
                                marginRight: '5vw'
                            }}>
                            <Button
                                variant="outlined"
                                onClick={answerQuestion}
                                sx={{
                                    minHeight:'20vh',
                                    width: '100%'
                                }}>
                                    Wyślij
                            </Button>
                        </Box>
                    </Grid>
            </Grid>
        </>
    );
}