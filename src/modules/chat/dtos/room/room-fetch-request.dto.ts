import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class RoomFetchRequestDto {
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  roomId: string;
}
