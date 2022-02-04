import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import root from './db/methods/index.js';
import schema from './schema/schema.js';

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
    schema,
    rootValue: root,
  })
);

app.listen(PORT, logServer);
