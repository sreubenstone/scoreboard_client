import React, { Component } from 'react';
import EventInfo from './EventInfo';

export default class BaseballBoard extends Component {

    render() {
        console.log('data here:', this.props.data)
        const home_score = JSON.parse(this.props.data.home_scores)
        const away_score = JSON.parse(this.props.data.away_scores)
        return (
            <table>
                <tr className="top">
                    <th></th>
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
                    <th>E</th>

                </tr>
                <tr>
                    <td>{this.props.data.away_team_name}</td>
                    <th>{away_score[0]}</th>
                    <th>{away_score[1]}</th>
                    <th>{away_score[2]}</th>
                    <th>{away_score[3]}</th>
                    <th>{away_score[4]}</th>
                    <th>{away_score[5]}</th>
                    <th>{away_score[6]}</th>
                    <th>{away_score[7]}</th>
                    <th>{away_score[8]}</th>
                    <th>{this.props.data.away_runs}</th>
                    <th>{this.props.data.away_hits}</th>
                    <th>{this.props.data.away_errors}</th>
                </tr>
                <tr>
                    <td>{this.props.data.home_team_name}</td>
                    <th>{home_score[0]}</th>
                    <th>{home_score[1]}</th>
                    <th>{home_score[2]}</th>
                    <th>{home_score[3]}</th>
                    <th>{home_score[4]}</th>
                    <th>{home_score[5]}</th>
                    <th>{home_score[6]}</th>
                    <th>{home_score[7]}</th>
                    <th>{home_score[8]}</th>
                    <th>{this.props.data.home_runs}</th>
                    <th>{this.props.data.home_hits}</th>
                    <th>{this.props.data.home_errors}</th>
                </tr>
                <EventInfo data={this.props.data.event_info} />

            </table>

        );
    }
}








