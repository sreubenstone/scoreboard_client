import { gql } from "apollo-boost";

export const GET_GAME = gql`
query game($id: String!) {
    game(id: $id) {
        id
        event_id
        status
        home_team_name
        away_team_name
        home_scores
        away_scores
        league
        home_hits
        home_runs
        home_errors
        away_hits
        away_runs
        away_errors
        event_info
    }
}
`;
