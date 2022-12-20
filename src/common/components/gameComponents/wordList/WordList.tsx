import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Timer from '../timer/Timer';
import { WordListProps } from './WordListProps';
import Word from './word/Word';


function WordList(props: WordListProps) {
    
  return (
    <>
        {
            props.words.length == 0 &&
            <Grid item xs={6} >
                <Box
                    sx={{
                        minHeight:'18vh'
                    }}>
                </Box>
            </Grid>
        }
        {
            props.words.length < 7 &&
            props.words.map(p => {
                return (
                    <Grid item xs={2} >
                        <Box
                            sx={{
                                minHeight:'18vh'
                            }}>
                                <Word word={p} />
                        </Box>
                    </Grid>
                )
            })
        }
        {
            props.words.length > 6 &&
            props.words.map(p => {
                return (
                    <Grid item xs={1} >
                        <Box
                            sx={{
                                minHeight:'18vh'
                            }}>
                                <Word word={p} />
                        </Box>
                    </Grid>
                )
            })
        }
        {
            props.words.length < 4 &&
            <Grid item xs={6} >
                <Box
                    sx={{
                        minHeight:'18vh'
                    }}>
                </Box>
            </Grid>
        }
    </>
  );
}

export default WordList;