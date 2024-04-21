import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateRoomDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  roomId: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: true })
  @IsArray()
  @IsString({ each: true })
  @IsUUID(undefined, {
    each: true,
    message: 'Each participant must be a valid UUID',
  })
  @IsOptional()
  participants: string[];
}
