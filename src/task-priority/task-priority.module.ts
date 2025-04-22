import { Module } from '@nestjs/common';
import { TaskPriorityService } from './task-priority.service';
import { TaskPriorityController } from './task-priority.controller';

@Module({
  controllers: [TaskPriorityController],
  providers: [TaskPriorityService],
})
export class TaskPriorityModule {}
