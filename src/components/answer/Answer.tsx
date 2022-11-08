import React, { useContext, useEffect, useRef, useState } from 'react';
import  { Answer as AnswerType } from '../../types/Answer';
import './Answer.css';
import correct from "../../assets/correct.mp3";
import { SettingsContext } from '../../contexts/SettingsContext';
import { AdminContext } from '../../contexts/AdminContext';

function Answer(props : AnswerType) {
  
  const { authenticated } = useContext(AdminContext);
  let audio = new Audio(correct);
  const settings = useContext(SettingsContext);
  useEffect(()=>{
    if (props.answered && !settings.soundOff && !authenticated){
      audio.play();
    }
  }, [props.answered])

  return (
    <div className="Answer">
        <div className={`AnswerName ${authenticated?'':'Appear'} ${props.answered || authenticated?'':'Hidden'}`}>
            {props.answered||authenticated ? props.value : ''}
        </div>
        <div className={`AnswerPoints ${authenticated?'':'Appear'} ${props.answered || authenticated?'':'Hidden'} ${props.answered && authenticated?'Answered':''}`}>
            {props.answered || authenticated ? props.points : ''}
        </div>
    </div>
  );
}

export default Answer;