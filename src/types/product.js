import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const ProductType = new GraphQLObjectType({
  name: 'ProductType',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    brand: { type: GraphQLString },
    price: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    codeitem: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }
});

export { ProductType }