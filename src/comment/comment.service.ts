import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class CommentService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  
  create(createCommentDto: CreateCommentDto) {
    return this.comment.create({
      data: createCommentDto,
    })
  }

  findAll() {
    return this.comment.findMany({
      orderBy: {
        createdAt: 'asc',
      }
    })
  }


  // update(id: number, updateCommentDto: UpdateCommentDto) {
  //   return `This action updates a #${id} comment`;
  // }

  remove(id: string) {
    return this.comment.delete({
      where: {id}
    })
  }
}
