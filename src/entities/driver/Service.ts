import { filter } from 'lodash';
import drivers from '../../__mocks__/drivers.json';
import BaseService from '../BaseService';

class Service extends BaseService {
  data = drivers;
  public getDrivers(car?: Car): [Driver] {
    const { id } = car;
    const driversFound = filter(
      this.data,
      (driver: Driver) => driver.cars.findIndex(carId => carId === id) > -1,
    );
    return driversFound;
  }
}

export default new Service();
