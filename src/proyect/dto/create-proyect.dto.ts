import { IsNumber, IsString } from "class-validator"

export class CreateProyectDto {
    @IsString()
    name:        string
    @IsString()
    description: string
    @IsNumber()
    ownerId:     number
    @IsNumber()
    teamId:      number
}
