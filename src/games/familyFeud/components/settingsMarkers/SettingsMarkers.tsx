import React, { useContext } from 'react';
import './SettingsMarkers.css';
import { SettingsContext } from '../../contexts/SettingsContext';

function SettingsMarkers() {
  const settings = useContext(SettingsContext);
  return (
    <div className="SettingsMarkers">
      {settings.pointsMultiplier!=1?<div className="Multiplier">x {settings.pointsMultiplier}</div>:''}
      {/*settings.soundOff?<img className="NoSound" src={require("../../assets/no-sound.png")} />:''*/}
    </div>
  );
}

export default SettingsMarkers;