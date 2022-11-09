import React from 'react';
import Answer from '../answer/Answer';
import { AnswersProps } from './AnswersProps';
import './Answers.css';
import Points from '../points/Points';

function Answers(props : AnswersProps) {
  return (
    <div className="Answers">
      <Points points={props.answers.filter(a => a.answered).reduce((sum, curr) => sum + curr.points, 0)}/>
      {props.answers.map(a => <Answer key={a.key} id={a.key} value={a.value} answered={a.answered} points={a.points} />)}
    </div>
  );
}

export default Answers;