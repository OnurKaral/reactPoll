import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://46.101.254.31/v1/graphql',
  cache: new InMemoryCache()
});

export default client;