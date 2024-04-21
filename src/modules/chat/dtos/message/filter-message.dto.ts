import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class FilterMessageDto {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  first?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  rows?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  filter?: string;

  @ApiProperty({ required: false })
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  roomId: string;
}
