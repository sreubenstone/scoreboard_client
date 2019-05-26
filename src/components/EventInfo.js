import React, { Component } from 'react';
import beer from './beer';

const text = {
    paddingTop: '10px'
}

export default class EventInfo extends Component {

    render() {
        const event = JSON.parse(this.props.data)
        const selected = beer()

        return (
            <div className="events">
                <div style={{ marginRight: '20px' }}>
                    <div style={text}>
                        <b>Stadium</b>: {event.site.name}
                    </div>
                    <div style={text}>
                        <b>Temp:</b> {event.temperature} degrees
                    </div>
                    <div style={text}>
                        <b>Game Type:</b> {event.season_type}
                    </div>
                </div>
                <div className="bar" />
                <div style={{ marginTop: '14px' }}>
                    <img height='50px' src={selected.image} />
                    Recommended Beer: {selected.name}
                </div>
            </div>
        );
    }
}








