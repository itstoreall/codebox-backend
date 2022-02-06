import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI_DB;

const mongoDb = MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 5,
});

process.on('SIGINT', async () => {
  const client = await mongoDb;
  client.close();
  console.log('Disconnect MongoDB');
  process.exit;
});

const connectMongoDb = () => {
  return {
    name: 'mongodb',
    mongoDb: mongoDb,
  };
};

export default connectMongoDb;
