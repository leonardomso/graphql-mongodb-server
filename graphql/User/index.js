export const typeDef = `
  type User {
    name: String!
    email: String!
    password: String
    avatar: String
  }

  type Query {
    user(name: String!): User
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    editUser(name: String!, email: String!, password: String!): User
    deleteUser(name: String!, email: String!, password: String!): User
    fuckUser(name: String!): User
  }
`;

export const resolvers = {
  Query: {
    user: () => {},
    users: () => {}
  },
  Mutation: {
    addUser: () => {},
    editUser: () => {},
    deleteUser: () => {},
    fuckUser: () => {}
  }
};
