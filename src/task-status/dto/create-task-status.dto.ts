import { BlobOptions } from "buffer";
import { IsBoolean } from "class-validator";

export class CreateTaskStatusDto {
    @IsBoolean()
    stsatus: boolean
}
