const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const schema = require("./graphql/");

const app = express();
const port = process.env.PORT || "4000";

// Body parser middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () => console.log(`Server running on port ${port}`));
