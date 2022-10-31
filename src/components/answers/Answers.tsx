import React from 'react';
import Answer from '../answer/Answer';
import AnswersProps from './AnswersProps';
import './Answers.css';

function Answers(props : AnswersProps) {
  return (
    <div className="Answers">
    {
      props.answers.map(a => <Answer key={a.key} answer={a.answer} ansered={a.ansered} points={a.points}  />)
    }
    </div>
  );
}

export default Answers;