import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import * as Queries from './queries';
import * as Mutations from './mutations';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: { ...Queries },
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: { ...Mutations },
  }),
});

export default schema;
