import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeersController } from './beers.controller';
import { BeersRepository } from './beers.repository';
import { Beers, BeersSchema } from './beers.schema';
import { BeersService } from './beers.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Beers.name, schema: BeersSchema }])],
  controllers: [BeersController],
  providers: [BeersService, BeersRepository],
})
export class BeersModule {}
