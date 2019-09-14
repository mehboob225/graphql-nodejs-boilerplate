import { filter } from 'lodash';
import cars from '../../__mocks__/cars.json';
import BaseService from '../BaseService';

class Service extends BaseService {
  data = cars;
  public getCars(driver?: Driver): [Car] {
    const { id } = driver;
    const carsFound = filter(
      this.data,
      (car: Car) => car.drivers.findIndex(driverId => driverId === id) > -1,
    );
    return carsFound;
  }
}

export default new Service();
