import React from 'react';
import TeamProps from './TeamProps';
import './Team.css';

function Team(props : TeamProps) {
  return (
    <div className="Team">
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