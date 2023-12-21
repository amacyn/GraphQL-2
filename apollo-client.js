
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://carojon-de456b5b4e2c.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
