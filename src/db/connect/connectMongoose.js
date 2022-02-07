import mongoose from 'mongoose';

const uri = process.env.MONGOOSE_URI_DB;

const db = mongoose.connect(uri, { maxPoolSize: 5 });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to db');
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected.');
});
mongoose.connection.on('error', err => {
  console.log(`Mongoose connection ERROR: ${err.message}`);
});

process.on('SIGINT', async () => {
  mongoose.connection.close(() => {
    console.log('Disconnect Mongoose');
    process.exit;
  });
});

const connectMongoose = () => {
  return {
    name: 'mongoose',
    mongoose: db,
  };
};

export default connectMongoose;
