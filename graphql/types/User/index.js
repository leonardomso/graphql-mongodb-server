export default `
    type User {
      id: String
      email: String!
      password: String!,
      other: String
    }

  type Query {
    login(email: String!, password: String!): User
    user(id: String!): User
    users: [User]
  }

  type Mutation {
    addUser(email: String!, password: String!): User
    setUserOther(id: String, other: String!): User
  }
  `;
