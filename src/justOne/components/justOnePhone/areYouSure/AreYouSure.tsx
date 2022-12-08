import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { DialogProps } from '../../../types/Props/DialogProps';

function AreYouSure(props : DialogProps) {

  const doChange = () => {
    props.onAccept();
    props.onClose();
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth sx={{minWidth:400}}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={doChange}>Yes</Button>
          <Button onClick={props.onClose}>No</Button>
        </DialogActions>
      </Dialog>
  );
}

export default AreYouSure;