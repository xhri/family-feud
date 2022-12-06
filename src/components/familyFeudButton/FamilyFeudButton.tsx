import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react';

function FamilyFeudButton() {
    const [win, setWin] = useState<number>(0);
    
    const clickRed = () => {
        setWin(1);
    };
    const clickBlue = () => {
        setWin(2);
    };

  return (
    <Box
        sx={{
            width:'100%',
            height:'90vh'
        }}>
            {
                win == 0 &&
                <>
                    <Box
                        onClick={clickRed}
                        sx={{
                            float: 'left',
                            background: 'red',
                            margin:'3%',
                            width:'44%',
                            height:'100%'
                        }}>
                    </Box>
                    <Box
                        onClick={clickBlue}
                        sx={{
                            background: 'blue',
                            float: 'left',
                            margin:'3%',
                            width:'44%',
                            height:'100%'
                        }}>
                    </Box>
                </>
            }
            {
                win == 1 &&
                <Box
                    sx={{
                        margin:'3%',
                        background: 'red',
                        width:'94%',
                        height:'100%'
                    }}>
                </Box>
            }
            {
                win == 2 &&
                <Box
                    sx={{
                        margin:'3%',
                        background: 'blue',
                        width:'94%',
                        height:'100%'
                    }}>
                </Box>
            }
    </Box>
  );
}

export default FamilyFeudButton;