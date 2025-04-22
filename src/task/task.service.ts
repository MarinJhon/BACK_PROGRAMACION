import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TaskService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createTaskDto: CreateTaskDto) {
    return this.task.create({
      data: createTaskDto
    })
  }

  findAll() {
    return this.task.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })}

  findOne() {
    return this.task.findFirst()  }

  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  remove(id: string) {
    return this.task.delete({where: {id}})
  }
}
