import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql";

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    address: {
      type: new GraphQLObjectType({
        name: "AddressType",
        fields: {
          street: { type: GraphQLString },
          suite: { type: GraphQLString },
          city: { type: GraphQLString },
          zipcode: { type: GraphQLString },
          geo: {
            type: new GraphQLObjectType({
              name: "GeoType",
              fields: {
                lat: { type: GraphQLString },
                lng: { type: GraphQLString }
              }
            })
          }
        }
      })
    },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    company: {
      type: new GraphQLObjectType({
        fields: {
          name: { type: GraphQLString },
          catchPhrase: { type: GraphQLString },
          bs: { type: GraphQLString }
        },
        name: "CompanyType"
      })
    }
  }
});

export { UserType };
