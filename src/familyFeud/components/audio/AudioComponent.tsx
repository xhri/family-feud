import React, { useContext, useEffect } from 'react';
import entry from "../../assets/entry.mp3";
import { AdminContext } from '../../../contexts/AdminContext';
import { SettingsContext } from '../../contexts/SettingsContext';

function AudioComponent() {
  let audio = new Audio(entry);
  const settings = useContext(SettingsContext);    
  const { authenticated } = useContext(AdminContext);
  useEffect(() => {
    if (settings.startSoundCounter != 0 && !settings.soundOff && !authenticated)
      audio.play()
  },[settings.startSoundCounter])
  
  return (
    <></>
  );
}

export default AudioComponent;