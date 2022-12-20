import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { DialogProps } from '../../../../games/justOne/types/Props/DialogProps';

function AreYouSure(props : DialogProps) {

  const doChange = () => {
    props.onAccept();
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth sx={{minWidth:400}}>
        <DialogTitle>Czy na pewno?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose}>Nie</Button>
          <Button onClick={doChange}>Tak</Button>
        </DialogActions>
      </Dialog>
  );
}

export default AreYouSure;