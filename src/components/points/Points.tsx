import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import { PointsProps } from './PointsProps';

function Points(props : PointsProps) {
  
  const settings = useContext(SettingsContext);
  return (
    <Grid container justifyContent="center" sx={{marginBottom:'2%'}}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 2,
          borderRadius: 2,
          minWidth: 300,
          fontSize: 28,
          width: '85%',
          fontWeight: 'medium',
          minHeight: '1.5em',
          border: 1
        }}>
          {settings.pointsMultiplier!=1 &&
            <Box
              sx={{
                display: 'inline-block',
                width: '10%'
              }}>
                x {settings.pointsMultiplier}
            </Box>}
          <Box
            sx={{
              display: 'inline-block',
              width: settings.pointsMultiplier==1?'70%':'60%'
            }}>
              Points
          </Box>
          <Box
            sx={{
              display: 'inline-block',
              width: '25%'
            }}>
              {props.points}
          </Box>
      </Box>
    </Grid>
  );
}

export default Points;