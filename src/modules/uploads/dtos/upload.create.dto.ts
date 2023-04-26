import { faker } from '@faker-js/faker';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    IsNumber,
    IsEmail,
    MaxLength,
    MinLength,
    IsUUID,
    IsOptional,
    ValidateIf,
    IsDate,
} from 'class-validator';

export class UploadCreateDto {
    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly fileOriginalName: string;

    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly fileName: string;

    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly userId: string;

    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => Number)
    readonly fileSize: number;

    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly extension: string;

    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly fileType: string;

    @ApiProperty({ required: false, nullable: true })
    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly externalLink: string;
}
