import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Mediciones} from '../models';
import {MedicionesRepository} from '../repositories';

export class MedicionesController {
  constructor(
    @repository(MedicionesRepository)
    public medicionesRepository : MedicionesRepository,
  ) {}

  @post('/api/mediciones', {
    responses: {
      '200': {
        description: 'Mediciones model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mediciones)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mediciones, {
            title: 'NewMediciones',
            exclude: ['id'],
          }),
        },
      },
    })
    mediciones: Omit<Mediciones, 'id'>,
  ): Promise<Mediciones> {
    return this.medicionesRepository.create(mediciones);
  }

  @get('/api/mediciones/count', {
    responses: {
      '200': {
        description: 'Mediciones model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Mediciones) where?: Where<Mediciones>,
  ): Promise<Count> {
    return this.medicionesRepository.count(where);
  }

  @get('/api/mediciones', {
    responses: {
      '200': {
        description: 'Array of Mediciones model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Mediciones, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Mediciones) filter?: Filter<Mediciones>,
  ): Promise<Mediciones[]> {
    return this.medicionesRepository.find(filter);
  }

  @patch('/api/mediciones', {
    responses: {
      '200': {
        description: 'Mediciones PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mediciones, {partial: true}),
        },
      },
    })
    mediciones: Mediciones,
    @param.where(Mediciones) where?: Where<Mediciones>,
  ): Promise<Count> {
    return this.medicionesRepository.updateAll(mediciones, where);
  }

  @get('/api/mediciones/{id}', {
    responses: {
      '200': {
        description: 'Mediciones model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Mediciones, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Mediciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Mediciones>
  ): Promise<Mediciones> {
    return this.medicionesRepository.findById(id, filter);
  }

  @patch('/api/mediciones/{id}', {
    responses: {
      '204': {
        description: 'Mediciones PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mediciones, {partial: true}),
        },
      },
    })
    mediciones: Mediciones,
  ): Promise<void> {
    await this.medicionesRepository.updateById(id, mediciones);
  }

  @put('/api/mediciones/{id}', {
    responses: {
      '204': {
        description: 'Mediciones PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mediciones: Mediciones,
  ): Promise<void> {
    await this.medicionesRepository.replaceById(id, mediciones);
  }

  @del('/api/mediciones/{id}', {
    responses: {
      '204': {
        description: 'Mediciones DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.medicionesRepository.deleteById(id);
  }
}
