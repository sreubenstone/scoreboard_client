import React from 'react';
import '../../App.css';
import BaseballBoard from '../BaseballBoard';
import EventInfo from '../EventInfo';

function BaseballActive(props) {
    return (
        <div className="box1">
            {/* Post Game */}
            <BaseballBoard data={props.data} />

        </div>
    );
}

export default BaseballActive;