import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectDto } from './create-proyect.dto';
import { IsBoolean } from 'class-validator';

export class UpdateProyectDto extends PartialType(CreateProyectDto) {
    @IsBoolean()
    status: boolean
}
