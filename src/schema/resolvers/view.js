import db from '../../db/models/index.js';

const { view: View } = db;

async function findViews() {
  return await View.findAll()
}

const resolvers = {
  Query: {
    // getAllViews: () => View.findAll(),
    getAllViews: () => findViews(),
    getView: ({ id }) => {
      const oneView = View.findOne({ where: { id } });
      return oneView;
    },
  },
  Mutation: {
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
  },
},

export default resolvers;

/* ------ example -------
getTransactionsHistory: async (parent: any, args: any, ctx: any) => {
  let transactionHistory: any = [];
  if (args.chainId === 56) {
    await calculateTransactions(args.account).then(async () => {
      await findHistory(args.account, args.chainId).then(result => {
        transactionHistory = result;
      });
    });
  } else if (args.chainId === 97) {
    await calculateTransactions(args.account, true).then(async () => {
      await findHistory(args.account, args.chainId).then(result => {
        transactionHistory = result;
      });
    });
  }
  return transactionHistory;
},

-------

async function findHistory(account: string, chainId: number) {
  return await db.transactionsHistory.findAll({
      where: {user: account, chainId: chainId},
      order: [['timestamp', 'DESC']],
  })
}
*/