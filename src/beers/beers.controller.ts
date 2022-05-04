import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateBeerDto } from './beers.dto';
import { BeersService } from './beers.service';

@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Get()
  async findAll() {
    return this.beersService.findAll();
  }

  @Post()
  async create(@Body() createBeerDto: CreateBeerDto) {
    return this.beersService.create(createBeerDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.beersService.delete(id);
  }
}
