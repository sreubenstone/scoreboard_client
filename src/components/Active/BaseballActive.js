import React from 'react';
import '../../App.css';
import BaseballBoard from '../BaseballBoard';

function BaseballActive(props) {
  return (
    <div className="box1">
      <BaseballBoard data={props.data} />
    </div>
  );
}

export default BaseballActive;






