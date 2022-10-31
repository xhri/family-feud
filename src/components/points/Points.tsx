import React from 'react';
import PointsProps from './PointsProps';
import './Points.css';
import Team from '../team/Team';

function Points(props : PointsProps) {
  return (
    <div className="Points">
      {
      props.teams.map(t => <Team  points={t.points} name={t.name} active={t.active} key={t.key}  />)
      }
    </div>
  );
}

export default Points;