import service from './Service';
import carService from '../driver/Service';

const cars = (parent, args, context, info) => {
  return service.getAll();
};

const drivers = (parent, args, context, info) => {
  return carService.getDrivers(parent);
};

export default {
  Query: {
    cars,
  },
  Car: {
    drivers,
  },
};
