import db from '../../index.js';
import { ObjectId } from 'mongodb';

const getCollection = async (db, name) => {
  const client = await db.mongoDb;
  const collection = await client.db().collection(name);

  return collection;
};

const getAllViews = async () => {
  const collection = await getCollection(db, 'views');
  const result = collection.find({}).toArray();

  return result;
};

const getView = async id => {
  const collection = await getCollection(db, 'views');
  const [result] = await collection.find({ _id: new ObjectId(id) }).toArray();

  return result;
};

const createView = async body => {
  const collection = await getCollection(db, 'views');

  const record = {
    ...body,
    // ...body.isVaccinated ? {} : {isVaccinated: false}
  };

  const result = await collection.insertOne(record);

  // const {
  //   ops: [result],
  // } = await collection.insertOne(record);
  return result;
};

const deleteView = async id => {
  const collection = await getCollection(db, 'views');
  const { value: result } = await collection.findOneAndDelete({
    _id: new ObjectId(id),
  });
  return result;
};

const updateView = async (id, body) => {
  const collection = await getCollection(db, 'views');

  const { value: result } = await collection.findOneAndUpdate(
    {
      _id: new ObjectId(id),
    },
    { $set: body }
  );
  return result;
};

export default {
  getAllViews,
  getView,
  createView,
  deleteView,
  updateView,
};
