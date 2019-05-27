import React, { Component } from 'react';
import EventInfo from './EventInfo';

export default class Baseball extends Component {

    render() {

        const info = this.props.data
        const time = `Top of the Fourth Inning.`

        return (
            <div>
                <h2> {(info.event_information.status === 'completed') ? ' This Game Has Ended' : (info.event_information.status === 'active') ? `This Game is Live Now: ${time} ` : 'Pre Game'}</h2>
                <table>
                    <tr className="top">
                        <th style={{ borderTopLeftRadius: '10px', borderLeftWidth: '0px', width: '100px' }}></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>R</th>
                        <th>H</th>
                        <th style={{ borderTopRightRadius: '10px' }}>E</th>
                    </tr>
                    <tr>
                        <td style={{ borderLeftWidth: '0px', }}>{info.away_team.full_name}</td>
                        <th>{info.away_period_scores[0]}</th>
                        <th>{info.away_period_scores[1]}</th>
                        <th>{info.away_period_scores[2]}</th>
                        <th>{info.away_period_scores[3]}</th>
                        <th>{info.away_period_scores[4]}</th>
                        <th>{info.away_period_scores[5]}</th>
                        <th>{info.away_period_scores[6]}</th>
                        <th>{info.away_period_scores[7]}</th>
                        <th>{info.away_period_scores[8]}</th>
                        <th>{info.away_batter_totals.runs}</th>
                        <th>{info.away_batter_totals.hits}</th>
                        <th>{info.away_errors}</th>
                    </tr>
                    <tr>
                        <td style={{ borderLeftWidth: '0px', }}>{info.home_team.full_name}</td>
                        <th className="bottom">{info.home_period_scores[0]}</th>
                        <th className="bottom">{info.home_period_scores[1]}</th>
                        <th className="bottom">{info.home_period_scores[2]}</th>
                        <th className="bottom">{info.home_period_scores[3]}</th>
                        <th className="bottom">{info.home_period_scores[4]}</th>
                        <th className="bottom">{info.home_period_scores[5]}</th>
                        <th className="bottom">{info.home_period_scores[6]}</th>
                        <th className="bottom">{info.home_period_scores[7]}</th>
                        <th className="bottom">{info.home_period_scores[8]}</th>
                        <th className="bottom">{info.home_batter_totals.runs}</th>
                        <th className="bottom">{info.home_batter_totals.hits}</th>
                        <th className="bottom">{info.home_errors}</th>
                    </tr>
                    <EventInfo data={info.event_information} />
                </table>
            </div>
        );
    }
}








