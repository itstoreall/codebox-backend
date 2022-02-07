import { Cat } from '../db/models/mongoose/Cat.js';

export const resolvers = {
  Query: {
    hello: () => 'hi',
  },

  // Mutation: {
  //   createCat: async ({ name }) => {
  //     const kitty = new Cat({ name });
  //     await kitty.save();

  //     console.log('kitty', kitty);
  //     return kitty;
  //   },
  // },
};

/*
Mutation: {
    createCat: async ({ name }) => {
      const kitty = new Cat({ name });
      await kitty.save();

      console.log('kitty', kitty);
      return kitty;
    },
  },
*/
