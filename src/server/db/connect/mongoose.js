import mongoose from 'mongoose';
import View from '../models/mongoose/View.js';

const connectMongoose = () => {
  const uri = process.env.MONGOOSE_URI_DB;

  const db = mongoose.connect(uri, { maxPoolSize: 5 });

  // mongoose.connection.on('connected', () => {
  //   console.log('--> connected to db');
  // }) // *
  // mongoose.connection.on('disconnected', () => {
  //   console.log(' ☆(◡.◔)★ disconnected from db');
  // }) // *
  mongoose.connection.on('error', err => {
    console.log(` «(◉_◉)» db onnection ERROR: ${err.message}`);
  });

  process.on('SIGINT', async () => {
    mongoose.connection.close(() => {
      console.log('.(◡.◡). connection is closed');
      process.exit();
    });
  });

  return {
    name: 'mongoose',
    mongoose: db,
    view: View,
  };
};

export default connectMongoose;
