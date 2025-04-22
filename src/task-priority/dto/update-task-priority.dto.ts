import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskPriorityDto } from './create-task-priority.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskPriorityDto extends PartialType(CreateTaskPriorityDto) {
    @IsString()
    name: string;
    @IsBoolean()
    status: boolean
}
