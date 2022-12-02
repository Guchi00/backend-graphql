import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: String
    firstName: String
    lastName: String
    email: String
    password: String
    businessId: String
  }

  type Customer {
    _id: String
    firstName: String
    lastName: String
    email: String
    password: String
    businessId: String
  }

  type Business {
    _id: String
    name: String
    address: String
    size: Int
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    businessId: String!
  }

  input CustomerInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    businessId: String!
  }

  input BusinessInput {
    name: String!
    address: String!
    size: Int!
  }

  type Query {
    users: [User]
    user(id: String!): User
    customers: [Customer]
    customer(id: String!): Customer
    businesses: [Business]
    business(id: String!): Business
  }
  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: String!, input: UserInput!): User
    deleteUser(id: String!): User

    createCustomer(input: CustomerInput!): Customer
    updateCustomer(id: String!, input: CustomerInput!): Customer
    deleteCustomer(id: String!): Customer

    createBusiness(input: BusinessInput!): Business
    updateBusiness(id: String!, input: BusinessInput!): Business
    deleteBusiness(id: String!): Business
  }
`
export default typeDefs;
