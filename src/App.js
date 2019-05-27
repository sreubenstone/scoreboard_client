import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ScoreCard from './components/ScoreCard';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

//const event = "eed38457-db28-4658-ae4f-4d4d38e9e212"

const event = "6c974274-4bfc-4af8-a9c4-8b926637ba74"

function App() {
  return (
    <ApolloProvider client={client}>
      <ScoreCard event={event} />
    </ApolloProvider>
  );
}

export default App;