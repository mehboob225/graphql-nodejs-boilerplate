export const Driver = `
  type Driver {
    id: ID!
    name: String!
    age: Int!
    phone: String
    address: String
    city: String
    cars: [Car]
  }
`;

export default [Driver];
