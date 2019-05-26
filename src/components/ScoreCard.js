import React from 'react';
import BaseballLoader from '././Loaders/BaseballLoader';
import BasketballLoader from '././Loaders/BasketballLoader';
import { Query } from "react-apollo";
import { GET_GAME } from '../queries';
import '../App.css';

function ScoreCard(props) {
    return (
        <Query query={GET_GAME} fetchPolicy="network-only" variables={{ id: props.event }}>
            {({ loading, error, data, refetch }) => {
                if (loading) return 'Loading..'
                if (error) { return `There is error with events query: ${error}` }
                return (
                    (data.game.league === 'MLB') ? <BaseballLoader data={data.game} /> : <BasketballLoader data={data.game} />
                )
            }
            }
        </Query>
    )
}

export default ScoreCard;






