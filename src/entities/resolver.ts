import { merge } from 'lodash';
import car from './car/resolver';
import driver from './driver/resolver';

export default merge(car, driver);
