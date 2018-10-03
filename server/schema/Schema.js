const { makeExecutableSchema } = require("graphql-tools");

const User = require("../models/User");

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {    
        user(id: ID): User
        users: [User]
    }

    type Mutation {
        addUser (id: ID!, name: String!, email: String!): User
        editUser (id: ID!, name: String!, email: String!): User
        deleteUser (id: ID!): User        
    }
`;

const resolvers = {
  Query: {
    users: user => {
      return;
    },
    user: async (parent, { userId }) => {
      try {
        const user = await User.findOne({ id: userId }).lean();
        return user;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    addUser(_, { userId, userName, userEmail }) {},
    editUser(_, { userId, userName, userEmail }) {},
    deleteUser(_, { userId }) {}
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
