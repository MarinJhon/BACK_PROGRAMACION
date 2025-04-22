import { IsNumber, IsString } from "class-validator"

export class CreateTeamMemberDto {
    @IsNumber()
    userId: number
    @IsNumber()
    teamId: number
    @IsString()
    role:   string 
}
