import { IsString } from "class-validator";

export class CreateProyectStatusDto {
    @IsString()
    name: string;
}
