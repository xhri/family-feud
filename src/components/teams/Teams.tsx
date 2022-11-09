import React from 'react';
import { TeamsProps } from './TeamsProps';
import Team from '../team/Team';

function Teams(props : TeamsProps) {
  return (
    <div className="Points">
      {
      props.teams.map(t => <Team id={t.key} points={t.points} name={t.name} active={t.active} key={t.key}  />)
      }
    </div>
  );
}

export default Teams;