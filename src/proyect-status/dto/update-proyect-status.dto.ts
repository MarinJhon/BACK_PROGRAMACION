import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectStatusDto } from './create-proyect-status.dto';
import { IsBoolean } from 'class-validator';

export class UpdateProyectStatusDto extends PartialType(CreateProyectStatusDto) {
    @IsBoolean()
    status: boolean
}
