import db from '../models/index.js';
import postgresResolvers from './view/postgresResolvers.js';
import mongooseResolvers from './view/mongooseResolvers.js';

const { getAllViews, getView, createView } =
  db.name === 'postgres' ? postgresResolvers() : mongooseResolvers();

export default {
  getAllViews,
  getView,
  createView,
};
