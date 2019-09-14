import car from './car/schema';
import driver from './driver/schema';

export const Query = `
  type Query {
    cars: [Car]
    drivers: [Driver]
  }
`;

export default [...car, ...driver, Query];
