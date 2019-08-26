import { GraphQLInt, GraphQLString, GraphQLBoolean } from 'graphql';
import { getUsers } from '../../models/users';
import { UsersType } from '../../types/users';


const GetUsers = {
  type: UsersType,
  args: {
    page: { type: GraphQLInt, defaultValue: 1 },
    perPage: { type: GraphQLInt, defaultValue: 10 },
    q: { type: GraphQLString, defaultValue: '' },
  },
  resolve: getUsers
}

export { GetUsers }