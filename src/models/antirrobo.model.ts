import {Entity, model, property} from '@loopback/repository';

@model()
export class Antirrobo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  mensaje?: string;


  constructor(data?: Partial<Antirrobo>) {
    super(data);
  }
}

export interface AntirroboRelations {
  // describe navigational properties here
}

export type AntirroboWithRelations = Antirrobo & AntirroboRelations;
