import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Beers, BeersDocument } from './beers.schema';

@Injectable()
export class BeersRepository {
  constructor(@InjectModel(Beers.name) private beersModel: Model<BeersDocument>) {}

  async create(createBeerDto): Promise<Beers> {
    const createdBeer = new this.beersModel(createBeerDto);
    return createdBeer.save();
  }

  async findAll(): Promise<Beers[]> {
    return this.beersModel.find().exec();
  }

  async delete(id: string) {
    return this.beersModel.deleteOne({ _id: id });
  }
}
