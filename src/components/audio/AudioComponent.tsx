import React, { useContext, useEffect } from 'react';
import entry from "../../assets/entry.mp3";
import { SettingsContext } from '../../contexts/SettingsContext';

function AudioComponent() {
  let audio = new Audio(entry);
  const settings = useContext(SettingsContext);    
  useEffect(() => {
    if (settings.startSoundCounter != 0 && !settings.soundOff)
      audio.play()
  },[settings.startSoundCounter])
  
  return (
    <></>
  );
}

export default AudioComponent;