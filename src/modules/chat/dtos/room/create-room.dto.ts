import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { RoomTypeEnum } from '../../enums/room-type.enum';

export class CreateRoomDto {
  @ApiProperty({ required: true })
  @IsEnum(RoomTypeEnum)
  @Transform(({ value }) => value.toString())
  @IsNotEmpty()
  type: RoomTypeEnum;

  @ApiProperty({ required: true })
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
  @IsNotEmpty()
  participants: string[];
}
