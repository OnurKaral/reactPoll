  
import { split, HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
	uri: `http://46.101.254.31/v1/graphql`,
});

const webSocketLink = new WebSocketLink({
	uri: `ws://46.101.254.31/v1/graphql`,
	options: {
		reconnect: true,
	},
});

const link = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
	},
	webSocketLink,
	httpLink,
);

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache({}),
});

export default client;



