import {Entity, model, property} from '@loopback/repository';

@model()
export class Mediciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
  })
  pasos?: number;

  @property({
    type: 'number',
  })
  peso?: number;

  @property({
    type: 'number',
  })
  agua?: number;

  @property({
    type: 'number',
  })
  iluminacion?: number;

  @property({
    type: 'number',
  })
  sonido?: number;

  @property({
    type: 'number',
  })
  cardiaco?: number;

  @property({
    type: 'number',
  })
  inclinacion_roll?: number;

  @property({
    type: 'number',
  })
  inclinacion_pitch?: number;

  @property({
    type: 'string',
  })
  fecha_hora?: string;

  @property({
    type: 'number',
  })
  latitud?: number;

  @property({
    type: 'number',
  })
  longitud?: number;


  constructor(data?: Partial<Mediciones>) {
    super(data);
  }
}

export interface MedicionesRelations {
  // describe navigational properties here
}

export type MedicionesWithRelations = Mediciones & MedicionesRelations;
