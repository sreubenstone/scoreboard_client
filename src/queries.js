import { gql } from "apollo-boost";

export const GET_GAME = gql`
query game($id: String!) {
    game(id: $id) {
        event_info
    }
}
`;
