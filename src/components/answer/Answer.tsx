import React, { useEffect, useRef, useState } from 'react';
import  { Answer as AnswerType } from '../../types/Answer';
import './Answer.css';

function Answer(props : AnswerType) {
  return (
    <div className="Answer">
        <div className={`AnswerName Appear ${props.answered?'':'Hidden'}`}>
            {props.answered ? props.value : ''}
        </div>
        <div className={`AnswerPoints Appear ${props.answered?'':'Hidden'}`}>
            {props.answered ? props.points : ''}
        </div>
    </div>
  );
}

export default Answer;