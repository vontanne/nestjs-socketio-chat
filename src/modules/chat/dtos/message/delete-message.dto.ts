import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DeleteMessageDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  roomId: string;

  @ApiProperty({ required: true, type: String, isArray: true })
  @IsArray()
  @IsUUID(4, { each: true })
  @IsNotEmpty()
  messageIds: string[];
}
