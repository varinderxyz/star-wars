import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
    }
    if (networkError) {
        console.error(`[Network error]: ${networkError}`);
    }
});

const client = new ApolloClient({
    link: ApolloLink.from([
        errorLink,
        new HttpLink({ uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index' }) 
    ]),
    cache: new InMemoryCache({
        typePolicies: {
            Film: {
                keyFields: ['id'],
            },
        },
    }),
});

export default client;