import { Box, CircularProgress, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { Config } from '../../../../../config';
import React, { useEffect } from 'react';
import { Question } from '../../../types/Question';
import QuestionsListItem from '../questionsListItem/questionsListItem';
import { OpenableProps } from '../../../types/props/OpenableProps';

function QuestionsDrawer(props : OpenableProps) {

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Array<Question>>([]);

  const apiClient = axios.create({
    baseURL: Config.ApiUrl,
    headers: {
      "Content-type": "application/json",
    },
  });

  useEffect(()=>{
    if (props.open)
    {
      setLoading(true);
      apiClient.get<Array<Question>>('/game/questions').then(result =>{
        setLoading(false);
        setData(result.data);
      });
    }else{
      setData([]);
    }
  }, [props.open])

  return (
    <Drawer
        anchor='left'
        open={props.open}
        onClose={props.onClose}
      >
      <Box
        sx={{
          width: 500
        }}>
          {
            loading ?
            <CircularProgress sx={{margin:'20%', marginLeft:'35%'}}/> :
            <List>
              {data.map(q => <QuestionsListItem key={q.id} value={q.value} answers={q.answers} id={q.id} />)}
          </List>
          }        
        <Divider/>
        <List>
            <ListItem disablePadding>
              <ListItemButton onClick={props.onClose}>
              <ListItemIcon><CancelIcon/></ListItemIcon>
                <ListItemText primary="Cancel" />
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default QuestionsDrawer;