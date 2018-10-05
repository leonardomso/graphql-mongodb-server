import User from "../../models/User";

export const typeDef = `
  type User {
    name: String
    email: String
    password: String
    avatar: String
  }

  type Query {
    user: User
    users: [User]
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    editUser(name: String!, email: String!, password: String!): User
    deleteUser(name: String!, email: String!, password: String!): User
  }
`;

export const resolvers = {
  Query: {
    user: () => {},
    users: () => {}
  },
  Mutation: {
    addUser: async (root, args, context, info) => {
      const res = await User.insertOne(args);
      return res.ops[0];
    },
    editUser: () => {},
    deleteUser: () => {}
  }
};
