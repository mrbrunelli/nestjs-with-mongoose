import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BeersModule } from './beers/beers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://beers:beers@localhost:27017/?authMechanism=DEFAULT'),
    BeersModule,
  ],
})
export class AppModule {}
