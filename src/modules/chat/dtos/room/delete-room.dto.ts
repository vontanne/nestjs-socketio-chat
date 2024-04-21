import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DeleteRoomDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  roomId: string;
}
