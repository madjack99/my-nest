import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsEmail,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PhoneAuth } from './customPipe/phoneAuth.js';

export enum Country {
  IND = 'IND',
  UK = 'UK',
  USA = 'USA',
  AUS = 'AUS',
}

export class AuthDto {
  @IsString()
  @Length(3, 20)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'password is too short, must be at least $constraint1 chars',
  })
  @MaxLength(15, {
    message: 'password is too short, must be at least $constraint1 chars',
  })
  password: string;

  @IsEnum(Country)
  country: Country;

  @IsDateString()
  dob: Date;

  @IsOptional()
  @IsNumber()
  phone: number;
}
