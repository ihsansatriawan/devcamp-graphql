import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { SearchType }  from '../../types/search';
import { ProductType }  from '../../types/product';
import { getListSearch, getListSearchDetail } from '../../models/search';

const GetSearch = {
  type: SearchType,
  args: {
    page: { type: GraphQLInt, defaultValue: 1 },
    perPage: { type: GraphQLInt, defaultValue: 10 },
    q: { type: GraphQLString },
  },
  resolve: getListSearch
}

const GetSearchDetail = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString },
  },
  resolve: getListSearchDetail
}

export { GetSearch, GetSearchDetail }