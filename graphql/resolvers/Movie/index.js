// The User schema.
import Movie from "/Users/victorseguin/travail/webapp/denzel/models/Movies.js";

export default {
  Query: {
    movie: (root, args) => {
      return new Promise((resolve, reject) => {
        Movie.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    movies: () => {
      return new Promise((resolve, reject) => {
        Movie.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addMovie: (root, { _id, link, id, metascore, poster, rating, synopsis, title, votes, year, date, review }) => {
      const newMovie = new Movie({ _id, link, id, metascore, poster, rating, synopsis, title, votes, year, date, review });

      return new Promise((resolve, reject) => {
        newMovie.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editMovie: (root, { _id, link, id, metascore, poster, rating, synopsis, title, votes, year, date, review }) => {
      return new Promise((resolve, reject) => {
        Movie.findOneAndUpdate({ id }, { $set: { date, review } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteMovie: (root, args) => {
      return new Promise((resolve, reject) => {
        Movie.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};