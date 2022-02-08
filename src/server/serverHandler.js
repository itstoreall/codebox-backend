import db from './db/connect/index.js';
import { ApolloServer } from 'apollo-server-express';
import { graphqlHTTP } from 'express-graphql';
import postgresSchema from './graphql/postgres/schema.js';
import postgresRoot from './graphql/postgres/resolvers.js';
import { typeDefs } from './graphql/mongoose/typeDefs.js';
import { resolvers } from './graphql/mongoose/resolvers.js';

const serverHandler = async app => {
  const PORT = process.env.PORT || 5000;

  const startMongoose = async () => {
    let server = null;
    server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
  };

  const startPostgres = async () => {
    app.use(
      '/graphql',
      graphqlHTTP({
        graphiql: true,
        schema: postgresSchema,
        rootValue: postgresRoot(),
      })
    );
  };

  db.name === 'mongoose' ? startMongoose() : startPostgres();

  app.listen(
    PORT,
    console.log(`server (${db.name}) ★(◔.◔)★ http://localhost:${PORT}/graphql`)
  );
};

export default serverHandler;
