import gql from 'graphql-tag';

const schema = {
  typeDefs: gql`
    type View {
      id: ID
      title: String
      path: String
      timestamp: String
      links: [Link]
    }

    type Link {
      id: ID
      href: String
      anchor: String
      source: String
      timestamp: String
    }

    input ViewInput {
      id: ID
      title: String!
      path: String!
      links: [LinkInput]
    }

    input LinkInput {
      id: ID
      href: String!
      anchor: String!
      source: String!
    }

    type Query {
      getAllViews: [View]
      getView(id: ID): View
    }

    type Mutation {
      createView(input: ViewInput): View
      createLink(input: LinkInput): Link
    }
  `,

  resolvers: {
    Query: {
      getAllViews: () => View.findAll(),
      getView: ({ id }) => {
        const oneView = View.findOne({ where: { id } });
        return oneView;
      },
      // funcExample: (parent, args) => {
      //   // Предполагается, что args равно объекту, наподобие { id: '1' }
      //   return mongodb.collection('flavors').find(args).toArray();
      // },
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
        // funcExample: (parent, args) => {
        //   // Предполагается, что args равно объекту наподобие { id: '1', name: 'Movie Theater Clone', description: 'Bring the movie theater taste home!' }

        //   // Выполняем обновление.

        //   mongodb.collection('flavors').update(args);

        //   // Возвращаем flavor после обновления.

        //   return mongodb.collection('flavors').findOne(args.id);
        // },
      },
      // Flavor: {
      //   nutrition: parent => {
      //     return mongodb.collection('nutrition').findOne({
      //       flavorId: parent.id,
      //     });
      //   },
      // },
    },
    //      Query: {
    //   getAllViews: [View]
    //   getView(id: ID): View
    // },
  },
};

export default schema;
