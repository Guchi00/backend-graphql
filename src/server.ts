import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { config } from 'dotenv';

import { connectDb } from './database';
import resolvers from './resolvers'; 
import typeDefs from './typeDefs';

config();

const start = async () => {
  await connectDb();
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4003 }, () =>
    console.log(`🚀 Server ready at http://localhost:4003${server.graphqlPath}`)
  );
};

start();
