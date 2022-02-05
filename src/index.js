import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import root from './db/methods/index.js';
// import schema from './schema/index.js';
// import schema from './schema/schema2.js';
import schema from './schema/schema.js';

// console.log('schema', schema);
// console.log('schema2', schema2.typeDefs);

const app = express();
const PORT = process.env.PORT || 5000;
const logServer = () => console.log(`server started on post: ${PORT}`);

// root.createView({ input: { title: 'eee1', path: 'rrr1' } });
// root.createLink({
//   input: { href: 'eee1', anchor: 'rrr1', source: 'ttt1' },
// });

app.use(cors());
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    // schema: schema.typeDefs,
    rootValue: root,
  })
);

app.listen(PORT, logServer);
