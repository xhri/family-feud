import React, { useEffect, useRef, useState } from 'react';
import AnswerProps from './AnswerProps';
import './Answer.css';

function Answer(props : AnswerProps) {
  return (
    <div className="Answer">
        <div className={`AnswerName Appear ${props.ansered?'':'Hidden'}`}>
            {props.ansered ? props.answer : ''}
        </div>
        <div className={`AnswerPoints Appear ${props.ansered?'':'Hidden'}`}>
            {props.ansered ? props.points : ''}
        </div>
    </div>
  );
}

export default Answer;