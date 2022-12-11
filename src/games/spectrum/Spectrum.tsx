import { Box, Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

function Spectrum() {
    

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
                    <p>Zgaduje:</p>
                </Box>
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
    </Grid>
  );
}

export default Spectrum;