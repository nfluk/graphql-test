import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

    const { url } = await startStandaloneServer(server, {listen: {port: 4000}}) // start a standalone server

    console.log(`🚀  Server ready at ${url}`);
