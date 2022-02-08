import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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
    hello: String!
  }

  type Query {
    getAllViews: [View]
    getView(id: ID): View
  }

  type Mutation {
    createView(input: ViewInput): View
    deleteView(id: ID): View
    updateView(id: ID, input: ViewInput): View
    createLink(input: LinkInput): Link
  }
`;

/*
type Cat {
    id: ID!
    name: String!
  }
  
  type: Mutation {
    createCat(name: String!): Cat!
  }
*/
