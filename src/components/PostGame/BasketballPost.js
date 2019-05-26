import React from 'react';
import '../../App.css';
import BaseballBoard from '../BaseballBoard';

function BasketballPost(props) {
    return (
        <div className="box1">
            Post Game
            <BaseballBoard data={props.data} />
        </div>
    );
}

export default BasketballPost;