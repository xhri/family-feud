import React from 'react';
import PointsProps from './PointsProps';
import './Points.css';

function Points(props : PointsProps) {
  return (
    <div className="Points">
        <p>
            {props.points}
        </p>
    </div>
  );
}

export default Points;