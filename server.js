const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const DENZEL_IMDB_ID = 'nm0000243';
const imdb = require('./sandbox').Sandbox;

const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
var cors = require("cors");
var schema = require("./models/Movies.js");


var app = Express();


const PORT = process.env.PORT || "4000";
const CONNECTION_URL = "mongodb+srv://vseg1:Jesuila2209*@cluster0-vd3vq.mongodb.net/test?retryWrites=true";

// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    CONNECTION_URL,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  app.use(
    "/graphql",
    cors(),
    BodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));