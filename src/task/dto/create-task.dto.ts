import { IsNumber, IsString } from "class-validator"

export class CreateTaskDto {
    @IsString()
    title:       string
    @IsString()
    description: string
    @IsNumber()
    projectId:   number
    @IsNumber()
    assigneeId:  number
}
