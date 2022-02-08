import db from '../../db/connect/index.js';

const { view: View } = db;

const createNewObject = input => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

const resolvers = () => {
  return {
    getAllViews: () => View.findAll(),

    getView: ({ id }) => {
      const oneView = View.findOne({ where: { id } });
      return oneView;
    },

    createView: ({ input }) => {
      try {
        const newView = createNewObject(input);

        return View.create({
          title: newView.title,
          path: newView.path,
          timestamp: (Date.now() / 1000).toFixed(),
        });
      } catch (err) {
        console.error('ERROR in createView:', err.message);
      }
    },
  };
};

export default resolvers;
