const graphql = require("graphql");
const axios = require("axios");
const express = require("express");
const mongoose = require("mongoose");

const User = require("../models/User");

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = graphql;

// Create User schema.
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

// Create rootQuery.
const query = new GraphQLObjectType({
  name: "query",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:4000/users/${args.id}`)
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
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, { id, name, email }) {
        return axios
          .post(`http://localhost:4000/users`, { id, name, email })
          .then(response => response.data)
          .catch(err => response.data.err);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, args) {
        return axios
          .delete(`http://localhost:4000/users/${args.id}`)
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
          .patch(`http://localhost:4000/users/${args.name}`, args)
          .then(response => response.data)
          .catch(err => response.data.err);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query,
  mutation
});
