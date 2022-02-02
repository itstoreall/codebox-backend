import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type View {
    id: ID
    title: String
    path: String
    links: [Link]
  }

  type Link {
    id: ID
    href: String
    anchor: String
    source: String
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
  }
`);

export default schema;
