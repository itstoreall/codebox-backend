import e from 'express';
import View from '../schemas/view.js';

const getAllViews = async () => {
  const result = await View.find({});
  return result;
};

const getView = async id => {
  const result = await View.findOne({ _id: id });
  return result;
};

const createView = async body => {
  try {
    const result = await View.create(body);
    return result;
  } catch (err) {
    if (err.name === 'ValidationError') {
      err.status = 400;
      // console.log(`ERROR in createView: ${err.name}`);
    }
    throw err;
  }
};

const deleteView = async id => {
  const result = await View.findByIdAndDelete({ _id: id });
  return result;
};

const updateView = async (id, body) => {
  const result = await View.findOneAndUpdate(
    {
      _id: id,
    },
    { ...body },
    { new: true }
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
