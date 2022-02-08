import db from '../../db/connect/index.js';

const { view: View } = db;

export const resolvers = {
  Query: {
    hello: () => 'hi',

    getAllViews: async () => await View.find({}),

    getView: async (_, { id }) => {
      try {
        const result = await View.findOne({ _id: id });
        return result;
      } catch (error) {
        if (err.name === 'ValidationError') {
          err.status = 400;
          console.log(`ERROR in getView: ${err.name}`);
        }
        throw err;
      }
    },
  },

  Mutation: {
    createView: async (_, body) => {
      try {
        const result = await View.create(body.input);
        return result;
      } catch (err) {
        if (err.name === 'ValidationError') {
          err.status = 400;
          console.log(`ERROR in createView: ${err.name}`);
        }
        throw err;
      }
    },

    deleteView: async (_, { id }) => {
      try {
        const result = await View.findByIdAndDelete({ _id: id });
        return result;
      } catch (error) {
        if (err.name === 'ValidationError') {
          err.status = 400;
          console.log(`ERROR in deleteView: ${err.name}`);
        }
        throw err;
      }
    },

    updateView: async (_, { id, input }) => {
      const result = await View.findOneAndUpdate(
        {
          _id: id,
        },
        { ...input },
        { new: true }
      );
      return result;
    },
  },
};
