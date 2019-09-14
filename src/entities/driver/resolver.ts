import carService from '../car/Service';
import driverService from './Service';
const drivers = (parent, args, context, info) => {
  return driverService.getAll();
};

const cars = (parent, args, context, info): [Car] => {
  return carService.getCars(parent);
};
export default {
  Query: {
    drivers,
  },
  Driver: {
    cars,
  },
};
