import * as _ from 'lodash';

export default class BaseService {
  public data: any[] = [];

  public get(id: number) {
    return _.keyBy(this.data, 'id')[id];
  }

  public getAll() {
    return this.data;
  }
}
