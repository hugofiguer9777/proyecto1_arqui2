import {DefaultCrudRepository} from '@loopback/repository';
import {Mediciones, MedicionesRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MedicionesRepository extends DefaultCrudRepository<
  Mediciones,
  typeof Mediciones.prototype.id,
  MedicionesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Mediciones, dataSource);
  }
}
