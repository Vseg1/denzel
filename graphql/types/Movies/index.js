export default `
  type Movie {
    _id: String!
    link: String!
    id: String!
    metascore: Int!
    poster: String!
    rating: String!
    synopsis: String!
    title: String!
    votes: String!
    year: String!
    date: String! 
    review: String!
  }
  type Query {
    movie(id: String!): Movie
    movies: [Movie]
  }
  type Mutation {
    addMovie(_id: String!,
        link: String!,
        id: String!,
        metascore: Int!,
        poster: String!,
        rating: String!,
        synopsis: String!,
        title: String!,
        votes: String!,
        year: String!,
        date: String! ,
        review: String!): Movie

    editMovie(_id: String!,
        link: String!,
        id: String!,
        metascore: Int!,
        poster: String!,
        rating: String!,
        synopsis: String!,
        title: String!,
        votes: String!,
        year: String!,
        date: String! ,
        review: String!): Movie

    deleteMovie(_id: String!,
        link: String!,
        id: String!,
        metascore: Int!,
        poster: String!,
        rating: String!,
        synopsis: String!,
        title: String!,
        votes: String!,
        year: String!,
        date: String! ,
        review: String!): Movie
  }
`;