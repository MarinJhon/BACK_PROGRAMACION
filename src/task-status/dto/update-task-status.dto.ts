import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskStatusDto } from './create-task-status.dto';
import { IsBoolean } from 'class-validator';

export class UpdateTaskStatusDto extends PartialType(CreateTaskStatusDto) {
    @IsBoolean()
    stsatus: boolean 
}
