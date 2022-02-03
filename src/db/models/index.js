import 'dotenv/config';
import { Sequelize } from 'sequelize';
import View from './View.js';
import Link from './Link.js';

const sequelize = new Sequelize('codebox_db', '', '', {
  dialect: process.env.POSTGRES_DIALECT,
  host: process.env.POSTGRES_HOST,
});

export default {
  sequelize: sequelize,
  view: View(sequelize),
  link: Link(sequelize),
};
