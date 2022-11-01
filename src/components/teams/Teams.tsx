import React from 'react';
import { TeamsProps } from './TeamsProps';
import './Teams.css';
import Team from '../team/Team';

function Teams(props : TeamsProps) {
  return (
    <div className="Points">
      {
      props.teams.map(t => <Team  points={t.points} name={t.name} active={t.active} key={t.key}  />)
      }
    </div>
  );
}

export default Teams;