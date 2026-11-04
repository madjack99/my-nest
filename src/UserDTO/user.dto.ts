import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserDTO {
  @IsString()
  @IsNotEmpty({ message: 'Username required' })
  @MaxLength(20, { message: 'Username cannot be longer that 20 characters' })
  readonly name: string;

  @IsAlphanumeric()
  @IsNotEmpty({ message: 'Password required' })
  @MaxLength(8, { message: 'Password must be at least 8 characters long' })
  readonly password: string;

  readonly createdAt?: string;
}
