// Query를 resolve(해결)하는 것
// graphql 에서 작성한 쿼리를 해결하는 코드를 resolvers에서 작성한다.

import { getMovies } from './db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;
