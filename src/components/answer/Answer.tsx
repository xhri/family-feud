import React, { useEffect, useRef, useState } from 'react';
import AnswerProps from './AnswerProps';
import './Answer.css';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

function Answer(props : AnswerProps) {
  return (
    <div className="Answer">
        <div className={`AnswerName ${props.ansered?'':'Hidden'}`}>
            {props.ansered ? props.answer : 'XXXXXXXXXXX'}
        </div>
        <div className="AnswerPoints">
            {props.points}
        </div>
    </div>
  );
}

export default Answer;