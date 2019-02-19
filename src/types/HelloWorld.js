import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const HelloWorldType = new GraphQLObjectType({
  name: 'HelloWorldType',
  fields: {
    text: { type: GraphQLString },
  },
});

export {
  HelloWorldType,
};
