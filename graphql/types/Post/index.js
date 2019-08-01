export default `
  type Dates {
    published: String
    updated: String
  }
  
  type Post {
    _id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
    date: Dates
  }

  type Query {
    post(_id: ID!): Post!
    posts: [Post!]!
  }

  type Mutation {
    createPost(post: CreatePostInput): Post!
    updatePost(_id: ID!, post: UpdatePostInput): Post!
    deletePost(_id: ID!): Post!
  }

  type Subscription {
    post: PostSubscriptionPayload!
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    post: Post!
  }
  
  input DatesInput {
    published: String
    updated: String
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
    date: DatesInput
  }
  
  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
    date: DatesInput
  }

  enum MutationType {
    CREATED
    DELETED
    UPDATED
  }
`;
