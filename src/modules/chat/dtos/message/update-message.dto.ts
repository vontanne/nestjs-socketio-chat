import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateMessageDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  messageId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  text: string;
}
