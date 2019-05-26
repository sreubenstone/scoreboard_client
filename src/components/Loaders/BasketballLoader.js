import React from 'react';
import BasketballActive from '../Active/BasketballActive';
import BasketballPost from '../PostGame/BasketballPost';
import BasketballPre from '../PreGame/BasketballPre';
import '../../App.css';



function BasketballLoader(props) {
    return (
        (props.data.completed === 'pre') ? <BasketballPre data={props.data} /> : (props.data.completed === 'active') ? <BasketballActive data={props.data} /> : <BasketballPost data={props.data} />
    );
}

export default BasketballLoader






