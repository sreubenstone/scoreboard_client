import React, { Component } from 'react';
import EventInfo from './EventInfo';

export default class Basketball extends Component {

    render() {

        const info = this.props.data

        return (
            <div>
                <h2> {(info.event_information.status === 'completed') ? ' This Game Has Ended' : (info.event_information.status === 'active') ? 'This Game is Live Now' : 'Pre Game'}</h2>
                <table>
                    <tr className="top">
                        <th style={{ borderTopLeftRadius: '10px', borderLeftWidth: '0px', }}></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th style={{ borderTopRightRadius: '10px' }}>T</th>
                    </tr>
                    <tr>
                        <td style={{ borderLeftWidth: '0px' }}>{info.away_team.full_name}</td>
                        <th>{info.away_period_scores[0]}</th>
                        <th>{info.away_period_scores[1]}</th>
                        <th>{info.away_period_scores[2]}</th>
                        <th>{info.away_period_scores[3]}</th>
                        <th>{info.away_totals.points}</th>
                    </tr>
                    <tr>
                        <td style={{ borderLeftWidth: '0px' }}>{info.home_team.full_name}</td>
                        <th>{info.home_period_scores[0]}</th>
                        <th>{info.home_period_scores[1]}</th>
                        <th>{info.home_period_scores[2]}</th>
                        <th>{info.home_period_scores[3]}</th>
                        <th>{info.home_totals.points}</th>
                    </tr>
                    <EventInfo data={info.event_information} />
                </table>
            </div>
        );
    }
}








