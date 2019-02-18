import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { SearchType }  from '../../types/search';
import { getListSearch } from '../../models/search';

const GetSearch = {
  type: SearchType,
  args: {
    page: { type: GraphQLInt, defaultValue: 1 },
    perPage: { type: GraphQLInt, defaultValue: 10 },
    q: { type: GraphQLString },
  },
  resolve: getListSearch
}

export { GetSearch }