import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { TeamModule } from './team/team.module';
import { TeamMemberModule } from './team-member/team-member.module';
import { ProyectModule } from './proyect/proyect.module';
import { ProyectStatusModule } from './proyect-status/proyect-status.module';
import { TaskModule } from './task/task.module';
import { TaskStatusModule } from './task-status/task-status.module';
import { TaskPriorityModule } from './task-priority/task-priority.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, RoleModule, TeamModule, TeamMemberModule, ProyectModule, ProyectStatusModule, TaskModule, TaskStatusModule, TaskPriorityModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
