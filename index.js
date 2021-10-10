import { gql } from "apollo-server";

const persons = [
  {
    name: "plank",
    city: "planker city",
    phone: "1938432984",
    street: "calle typescript",
    id: "1",
  },
  {
    name: "Far",
    city: "Farer city",
    street: "avenida javascript",
    phone: "89398323",
    id: "2",
  },
  {
    name: "Fov",
    city: "Fover city",
    street: "avenida graphql",
    id: "3",
  },
];

const typeDefs = gql`
  type person {
    name: String!
    city: String!
    phone: String
    street: String!
    id: ID!
  }

  type query {
    personsCount: Int!
    allPersons: [Person]
  }
`;
