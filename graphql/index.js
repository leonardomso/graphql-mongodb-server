import { makeExecutableSchema } from "graphql-tools";

import { typeDef as User, resolvers as userResolvers } from "./User/";

// If you had Query fields not associated with a
// specific type you could put them here.
const query = ``;

const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [query, User],
  resolvers: [resolvers, userResolvers]
});

export default schema;
