import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ScoreCard from './components/ScoreCard';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
  // clientState: {
  //   defaults: defaultState,
  //   resolvers: {}
  // },
});

const event = "eed38457-db28-4658-ae4f-4d4d38e9e212"

function App() {
  return (
    <ApolloProvider client={client}>
      <ScoreCard event={event} />
    </ApolloProvider>
  );
}

export default App;