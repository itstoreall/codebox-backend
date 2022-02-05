import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
// import { GraphQLSchema } from 'graphql';
import resolvers from './resolvers/index.js';
import typeDefs from './graphql/index.js';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
