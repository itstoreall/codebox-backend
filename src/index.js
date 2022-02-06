import 'dotenv/config';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import root from './db/methods/index.js';
import schema from './schema/schema.js';
import db from './db/models/index.js';
import viewModel from './db/models/mongodb/model/views.js';

const app = express();
const PORT = process.env.PORT || 5000;

const logServer = () =>
  console.log(`server started on post: ${PORT} - ${db.name} `);

if (db.name === 'mongodb') {
  db.mongoDb
    .then(() => {
      app.listen(PORT, logServer);
    })
    .catch(err => {
      console.log(`server does not work - ERROR: ${err.message}`);
      process.exit(1);
    });

  // const newView = await viewModel.createView({ aaa3: 'ddd4' });
  // const views = await viewModel.getAllViews();
  const view = await viewModel.getView('61fffc792fac639680a16b30');
  // const deletedView = await viewModel.deleteView('61fffcabf4d17b3f7f09e2cf');
  // const updateView = await viewModel.updateView('61fffc792fac639680a16b30', {
  //   aaa3: 'ddd000',
  // });

  // console.log('newView -->', newView);
  // console.log('views -->', views);
  console.log('view -->', view);
  // console.log('creation timestamp:', view._id.getTimestamp());
  // console.log('deletedView:', deletedView);
  // console.log('updateView:', updateView);
} else app.listen(PORT, logServer);

app.use(cors());
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    rootValue: root,
  })
);
