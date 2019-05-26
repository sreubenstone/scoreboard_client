import React from 'react';
import BaseballActive from '../Active/BaseballActive';
import BaseballPost from '../PostGame/BaseballPost';
import BaseballPre from '../PreGame/BaseballPre';
import '../../App.css';


function BaseballLoader(props) {
    return (
        (props.data.completed === 'pre') ? <BaseballPre data={props.data} /> : (props.data.completed === 'active') ? <BaseballActive data={props.data} /> : <BaseballPost data={props.data} />
    );
}

export default BaseballLoader;






