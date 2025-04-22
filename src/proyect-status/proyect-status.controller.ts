import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyectStatusService } from './proyect-status.service';
import { CreateProyectStatusDto } from './dto/create-proyect-status.dto';
import { UpdateProyectStatusDto } from './dto/update-proyect-status.dto';

@Controller('proyect-status')
export class ProyectStatusController {
  constructor(private readonly proyectStatusService: ProyectStatusService) {}

  @Post()
  create(@Body() createProyectStatusDto: CreateProyectStatusDto) {
    return this.proyectStatusService.create(createProyectStatusDto);
  }

  @Get()
  findAll() {
    return this.proyectStatusService.findAll();
  }

  // @Get()
  // findOne() {
  //   return this.proyectStatusService.findOne();
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectStatusDto: UpdateProyectStatusDto) {
    return this.proyectStatusService.update(id, updateProyectStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectStatusService.remove(id);
  }
}
