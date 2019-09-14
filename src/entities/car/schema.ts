export const Car = `
  type Car {
    id: ID!
    plate: String!
    make: String
    model: String
    year: Int
    drivers: [Driver]
  }
`;

export default [Car];
