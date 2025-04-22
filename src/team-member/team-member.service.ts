import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TeamMemberService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createTeamMemberDto: CreateTeamMemberDto) {
    return this.teamMember.create({
      data: createTeamMemberDto,
    })
  }

  findAll() {
    return this.teamMember.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.teamMember.findFirst()
  }

  // update(id: number, updateTeamMemberDto: UpdateTeamMemberDto) {
  //   return `This action updates a #${id} teamMember`;
  // }

  remove(id: string) {
    return this.teamMember.delete({where: {id}})
  }
}
