import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AssignUsersDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  roomId: string;

  @IsArray()
  @IsString({ each: true })
  @IsUUID(undefined, { each: true })
  @IsNotEmpty()
  participants: string[];
}
