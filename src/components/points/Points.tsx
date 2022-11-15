import { Box, Button, Grid } from '@mui/material';
import { useContext } from 'react';
import { AdminContext } from '../../contexts/AdminContext';
import { SettingsContext } from '../../contexts/SettingsContext';
import { PointsProps } from './PointsProps';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Points(props : PointsProps) {
  
  const { authenticated } = useContext(AdminContext);
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
          {
            authenticated &&
            <Box
              sx={{
                display: 'inline-block',
                width: '10%'
              }}>
                <Button><CheckCircleOutlineIcon/>Finish!</Button>
            </Box>
          }
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
              width: authenticated?(settings.pointsMultiplier==1?'60%':'50%'):(settings.pointsMultiplier==1?'70%':'60%')
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