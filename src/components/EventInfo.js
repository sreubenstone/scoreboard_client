import React, { Component } from 'react';
import beer from './beer';

const text = {
    paddingTop: '10px'
}

export default class EventInfo extends Component {

    render() {

        const selected = beer()
        console.log('EVENT:', this.props.data)

        return (
            <div className="events">
                <div style={{ marginTop: '0px' }}>
                    <b>Recommended Beer:</b> {selected.name}
                    <img height='30px' src={selected.image} />

                </div>
                <div style={{ marginRight: '20px', }}>
                    <div style={text}>
                        <b>Stadium</b>: {this.props.data.site.name}
                    </div>
                    <div style={text}>
                        <b>City:</b> {this.props.data.site.city}
                    </div>
                    <div style={text}>
                        <b>Game Type:</b> {this.props.data.season_type}
                    </div>
                </div>
                <div className="bar" />

            </div>
        );
    }
}








