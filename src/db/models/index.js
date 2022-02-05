import 'dotenv/config';
import { Sequelize } from 'sequelize';
import view from './View.js';
import link from './Link.js';

// const sequelize = new Sequelize('codebox_db', '', '', {
const sequelize = new Sequelize(
  'dav5hg1q7jg6u0',
  'uakkhcinwpbwck',
  '9903c2da837ece2fb1ba7af0094e5e2b78976d9883ae3189e57165dd232dc7f3',
  {
    dialect: 'postgres',
    host: 'https://codebox-backend.herokuapp.com/graphql',
    connection: process.env.DATABASE_URL,
    // host: process.env.POSTGRES_HOST,
  }
);

const View = view(sequelize);
const Link = link(sequelize);

// View.hasMany(Link);
// Link.belongsTo(View);

export default {
  sequelize: sequelize,
  view: View,
  link: Link,
};
