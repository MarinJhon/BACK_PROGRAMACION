import { IsString } from "class-validator";

export class CreateTaskPriorityDto {
    @IsString()
    name: string;
    
}
