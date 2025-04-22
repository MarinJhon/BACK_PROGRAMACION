import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTaskPriorityDto } from './dto/create-task-priority.dto';
import { UpdateTaskPriorityDto } from './dto/update-task-priority.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TaskPriorityService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createTaskPriorityDto: CreateTaskPriorityDto) {
    return this.taskPriority.create({
      data: createTaskPriorityDto,
    })
  }

  findAll() {
    return this.taskPriority.findMany({
      orderBy: {
        createdAt:'asc'
      }
    })  }


  update(id: string, updateTaskPriorityDto: UpdateTaskPriorityDto) {
    return this.taskPriority.update({
      where: { id },
      data: updateTaskPriorityDto,
    })
  }

  remove(id: string) {
    return this.taskPriority.delete({where: {id}})
  }
}
