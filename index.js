import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

//GraphQLServer 안의 {} 에 서버 환경설정을 넣어주면 서버 구동 끝이다. 너무 쉽다.
const server = new GraphQLServer({
  //모든 type에 대한 정의임 작성해둔 graphql의 위치 입력
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

server.start(() => console.log('GraphQL Server Running'));

//이러면 구동 완료임.
//GraphQL yoga 추가기능으로,
//localhost:4000 들어가면 GraphQL playground가 나오는데
//여기서 쿼리 구동 mutations를 testing 해 볼 수 있음
