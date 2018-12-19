import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";
import Comment from "./Comment/";

const resolvers = [User, Post, Comment];

export default mergeResolvers(resolvers);
