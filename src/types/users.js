import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt
} from "graphql";
import { UserType } from "./user";

const UsersType = new GraphQLObjectType({
  name: "UsersType",
  fields: {
    hasNextPage: { type: GraphQLBoolean },
    totalPages: { type: GraphQLInt },
    data: {
      type: new GraphQLObjectType({
        name: "UsersDataResponse",
        fields: {
          message: { type: GraphQLString },
          users: { type: new GraphQLList(UserType) }
        }
      })
    }
  }
});

export { UsersType };
