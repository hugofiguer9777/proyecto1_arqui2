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
import {Antirrobo} from '../models';
import {AntirroboRepository} from '../repositories';

export class AntirroboController {
  constructor(
    @repository(AntirroboRepository)
    public antirroboRepository : AntirroboRepository,
  ) {}

  @post('/api/antirrobos', {
    responses: {
      '200': {
        description: 'Antirrobo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Antirrobo)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Antirrobo, {
            title: 'NewAntirrobo',
            exclude: ['id'],
          }),
        },
      },
    })
    antirrobo: Omit<Antirrobo, 'id'>,
  ): Promise<Antirrobo> {
    return this.antirroboRepository.create(antirrobo);
  }

  @get('/api/antirrobos/count', {
    responses: {
      '200': {
        description: 'Antirrobo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Antirrobo) where?: Where<Antirrobo>,
  ): Promise<Count> {
    return this.antirroboRepository.count(where);
  }

  public modo: Antirrobo;
  @get('/api/antirrobos/last', {
    responses: {
      '200': {
        description: 'Antirrobo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Antirrobo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findLast(
    @param.filter(Antirrobo) filter?: Filter<Antirrobo>,
  ): Promise<Antirrobo> {
    (await this.antirroboRepository.find(filter)).forEach ((value) => {
      this.modo = value;
    });

    if(this.modo != null) {
      delete this.modo.id;
    }
    return this.modo;
  }

  @get('/api/antirrobos', {
    responses: {
      '200': {
        description: 'Array of Antirrobo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Antirrobo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Antirrobo) filter?: Filter<Antirrobo>,
  ): Promise<Antirrobo[]> {
    return this.antirroboRepository.find(filter);
  }

  @patch('/api/antirrobos', {
    responses: {
      '200': {
        description: 'Antirrobo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Antirrobo, {partial: true}),
        },
      },
    })
    antirrobo: Antirrobo,
    @param.where(Antirrobo) where?: Where<Antirrobo>,
  ): Promise<Count> {
    return this.antirroboRepository.updateAll(antirrobo, where);
  }

  @get('/api/antirrobos/{id}', {
    responses: {
      '200': {
        description: 'Antirrobo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Antirrobo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Antirrobo, {exclude: 'where'}) filter?: FilterExcludingWhere<Antirrobo>
  ): Promise<Antirrobo> {
    return this.antirroboRepository.findById(id, filter);
  }

  @patch('/api/antirrobos/{id}', {
    responses: {
      '204': {
        description: 'Antirrobo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Antirrobo, {partial: true}),
        },
      },
    })
    antirrobo: Antirrobo,
  ): Promise<void> {
    await this.antirroboRepository.updateById(id, antirrobo);
  }

  @put('/api/antirrobos/{id}', {
    responses: {
      '204': {
        description: 'Antirrobo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() antirrobo: Antirrobo,
  ): Promise<void> {
    await this.antirroboRepository.replaceById(id, antirrobo);
  }

  @del('/api/antirrobos/{id}', {
    responses: {
      '204': {
        description: 'Antirrobo DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.antirroboRepository.deleteById(id);
  }
}
