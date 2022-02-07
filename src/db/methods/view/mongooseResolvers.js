import View from '../../models/mongoose/schemas/view.js';

const viewMethods = () => {
  return {
    getAllViews: async () => await View.find({}),

    getView: async id => {
      const result = await View.findOne({ _id: id });
      return result;
    },

    createView: async body => {
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

    deleteView: async id => {
      const result = await View.findByIdAndDelete({ _id: id });
      return result;
    },

    updateView: async (id, body) => {
      const result = await View.findOneAndUpdate(
        {
          _id: id,
        },
        { ...body },
        { new: true }
      );
      return result;
    },
  };
};

export default viewMethods;
