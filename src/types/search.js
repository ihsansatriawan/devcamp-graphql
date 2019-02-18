import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';
import { ProductType } from './product';

const SearchType = new GraphQLObjectType({
  name: 'SearchType',
  fields: {
    products: { type: new GraphQLList(ProductType) },
    hasNextPage: { type: GraphQLBoolean },
    totalData: { type: GraphQLInt },
  }
})

export { SearchType }