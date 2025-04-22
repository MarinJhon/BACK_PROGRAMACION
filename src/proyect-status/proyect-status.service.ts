import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProyectStatusDto } from './dto/create-proyect-status.dto';
import { UpdateProyectStatusDto } from './dto/update-proyect-status.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class ProyectStatusService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createProyectStatusDto: CreateProyectStatusDto) {
    return this.projectStatus.create({
      data: createProyectStatusDto
    })
  }

  findAll() {
    return this.projectStatus.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.projectStatus.findFirst()
  }

  update(id: string, updateProyectStatusDto: UpdateProyectStatusDto) {
    return this.projectStatus.update({
      where: { id },
      data: updateProyectStatusDto
    })
  }

  remove(id: string) {
    return this.projectStatus.delete({where: {id}})}
}
