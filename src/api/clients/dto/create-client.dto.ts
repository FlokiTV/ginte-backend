import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ example: 'John Doe', description: 'Nome do cliente' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'E-mail do cliente',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '+55 11 98765-4321',
    description: 'Telefone do cliente',
    required: false,
  })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({
    example: 'Rua Exemplo, 123, São Paulo - SP',
    description: 'Endereço do cliente',
    required: false,
  })
  @IsString()
  @IsOptional()
  address?: string;
}
