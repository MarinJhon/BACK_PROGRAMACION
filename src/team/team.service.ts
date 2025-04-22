import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class TeamService extends PrismaClient implements OnModuleInit{
  async onModuleInit() {
    await this.$connect()
  }
 
  create(createTeamDto: CreateTeamDto) {
    return this.team.create({
      data: createTeamDto
    })
  }

  findAll() {
    return this.team.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    })
  }

  findOne() {
    return this.team.findFirst()
  }

  // update(id: number, updateTeamDto: UpdateTeamDto) {
  //   return `This action updates a #${id} team`;
  // }

  remove(id: string) {
    return this.team.delete({where: {id}})
  }
}
