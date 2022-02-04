import 'dotenv/config';
import { Sequelize } from 'sequelize';
import view from './View.js';
import link from './Link.js';

const sequelize = new Sequelize('codebox_db', '', '', {
  dialect: process.env.POSTGRES_DIALECT,
  host: process.env.POSTGRES_HOST,
});

const View = view(sequelize);
const Link = link(sequelize);

// View.hasMany(Link);
// Link.belongsTo(View);

export default {
  sequelize: sequelize,
  view: View,
  link: Link,
};
