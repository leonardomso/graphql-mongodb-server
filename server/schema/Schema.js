const graphql = require("graphql");
const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");

// Load Post and Profile Model.
const User = require("../models/User");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    avatar: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(response => response.data)
          .catch(err => response.data.err);
      }
    }
  }
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, { name, email }) {
        return axios
          .post(`http://localhost:3000/users`, { name, email })
          .then(response => response.data)
          .catch(err => response.data.err);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { name }) {
        return axios
          .delete(`http://localhost:3000/users/${name}`)
          .then(response => response.data)
          .catch(err => response.data.err);
      }
    },
    editUser: {
      type: UserType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        password: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/users/${args.name}`, args)
          .then(response => response.data)
          .catch(err => response.data.err);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
