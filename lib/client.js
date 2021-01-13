import { ApolloClient, InMemoryCache } from '@apollo/client';
// import cache from './graphql/cache';


const client = new ApolloClient({
    cache: new InMemoryCache(),
    connectToDevTools: true,
});
export default client;