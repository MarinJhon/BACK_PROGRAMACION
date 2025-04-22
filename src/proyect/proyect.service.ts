import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { PrismaClient } from 'generated/prisma';
import { Proyect } from './entities/proyect.entity';

@Injectable()
export class ProyectService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createProyectDto: CreateProyectDto) {
    return this.project.create({
      data: createProyectDto,
    })
  }

  findAll() {
    return this.project.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.project.findFirst()
  }

  update(id: string, updateProyectDto: UpdateProyectDto) {
    return this.project.update({
      where: { id },
      data: updateProyectDto,
    })
  }

  remove(id: string) {
    return this.project.delete({where: {id}})
  }
}
