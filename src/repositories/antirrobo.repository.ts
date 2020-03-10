import {DefaultCrudRepository} from '@loopback/repository';
import {Antirrobo, AntirroboRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AntirroboRepository extends DefaultCrudRepository<
  Antirrobo,
  typeof Antirrobo.prototype.id,
  AntirroboRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Antirrobo, dataSource);
  }
}
