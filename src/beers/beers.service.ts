import { Injectable } from '@nestjs/common';
import { CreateBeerDto } from './beers.dto';
import { BeersRepository } from './beers.repository';

@Injectable()
export class BeersService {
  constructor(private readonly beersRepository: BeersRepository) {}

  async create(createBeerDto: CreateBeerDto) {
    return this.beersRepository.create(createBeerDto);
  }

  async findAll() {
    return this.beersRepository.findAll();
  }

  async delete(id: string) {
    return this.beersRepository.delete(id);
  }
}
