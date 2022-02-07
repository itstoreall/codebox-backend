import db from '../db/models/index.js';
// import db from './db/models/index.js';
// import { ApolloServer, gql } from 'apollo-server-express';
import { graphqlHTTP } from 'express-graphql';
import postgresSchema from '../schema/schema.js';
import root from '../db/methods/index.js';
// import mongoose from 'mongoose';
// import { typeDefs } from './typeDefs.js';
// import { resolvers } from './resolvers.js';
// import mongooseViewModel from '../db/models/mongoose/model/views.js';

const serverHandler = async app => {
  console.log(`db: ${db.name}`);

  const PORT = process.env.PORT || 5000;

  const logServer = () =>
    console.log(`server ready at http://localhost:${PORT}/graphql`);

  // if (db.name === 'mongoose') {
  //   // const newView = await mongooseViewModel.createView({
  //   //   title: 'Page04',
  //   //   path: 'www.google.com.ua',
  //   // });
  //   // const views = await mongooseViewModel.getAllViews();
  //   // const view = await mongooseViewModel.getView('620134773cbe3c96e44f89d2');
  //   // console.log('newView -->', newView);
  //   // console.log(`views (${db.name}) -->`, views);
  //   // console.log(`view (${db.name}) -->`, view.id);
  // }

  app.listen(PORT, logServer);
  app.use(
    '/graphql',
    graphqlHTTP({
      graphiql: true,
      schema: postgresSchema,
      rootValue: root,
    })
  );
};

export default serverHandler;

/* --------- with gql: ---------

let server = null;

// const typeDefs = gql`
//   type Query {
//     hello: String!
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => 'hi',
//   },
// };

const startServer = async app => {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect('mongodb://localhost:27017/views', {
    useNewUrlParser: true,
  });

  app.listen(PORT, logServer);
};

startServer(app);
*/
