import { Sequelize } from 'sequelize';
import view from './View.js';
import link from './Link.js';

const sequelize = new Sequelize('codebox_db', '', '', {
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
});

const View = view(sequelize);
const Link = link(sequelize);

const connectPostgres = () => {
  return {
    name: 'postgres',
    sequelize: sequelize,
    view: View,
    link: Link,
  };
};

export default connectPostgres;
