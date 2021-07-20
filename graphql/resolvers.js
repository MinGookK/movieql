// Query를 resolve(해결)하는 것
// graphql 에서 작성한 쿼리를 해결하는 코드를 resolvers에서 작성한다.

import { getById, getMovies, addMovie, deleteMovie } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
