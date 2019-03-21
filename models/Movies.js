const mongoose = require("mongoose");

// Schema 

const Schema = mongoose.Schema;

// Create the Movies Schema.
const MoviesSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  metascore: {
    type: Number,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  votes: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  date : {
    type : String
  },
  review : {
    type : String
  }
});

const Movie = mongoose.model("Movies", MoviesSchema);

module.exports = {
  Movie
};

//end schema
