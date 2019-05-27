import React from 'react';
import Baseball from './Baseball';
import Basketball from './Basketball';
import { Query } from "react-apollo";
import { GET_GAME } from '../queries';
import '../App.css';

function ScoreCard(props) {
    return (
        <Query query={GET_GAME} fetchPolicy="network-only" pollInterval={15000} variables={{ id: props.event }}>
            {({ loading, error, data, refetch }) => {
                if (loading) return 'Loading..'
                if (error) { return `There is error with events query: ${error}` }
                const event_information = JSON.parse(data.game.event_info)
                return (
                    <div className="box1">
                        {(event_information.league === 'MLB') ? <Baseball data={event_information} /> : <Basketball data={event_information} />}
                    </div>
                )
            }
            }
        </Query>
    )
}

export default ScoreCard;






