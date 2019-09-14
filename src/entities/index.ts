import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolver';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
