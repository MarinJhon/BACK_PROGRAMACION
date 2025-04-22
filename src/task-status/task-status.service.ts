import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTaskStatusDto } from './dto/create-task-status.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TaskStatusService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect();
  }
  create(createTaskStatusDto: CreateTaskStatusDto) {
    return this.taskStatus.create({
      data: createTaskStatusDto,
    })
  }

  findAll() {
    return this.taskStatus.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.taskStatus.findFirst()}

  update(id: string, updateTaskStatusDto: UpdateTaskStatusDto) {
    return this.taskStatus.update({
      where: { id },
      data: updateTaskStatusDto,
    })
  }

  remove(id: string) {
    return this.taskStatus.delete({where: {id}})
  }
}
