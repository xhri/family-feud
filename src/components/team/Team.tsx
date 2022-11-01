import React from 'react';
import  { Team as TeamType } from '../../types/Team';
import './Team.css';

function Team(props : TeamType) {
  return (
    <div className={`Team ${props.active?'Active' : ''}`}>
        <p>
            {props.name}
        </p>
        <p>
            {props.points}
        </p>
    </div>
  );
}

export default Team;