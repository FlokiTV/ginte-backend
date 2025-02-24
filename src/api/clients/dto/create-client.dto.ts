import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @ApiProperty({ example: 'John Doe', description: 'Nome do cliente' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'E-mail do cliente',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '11987654321',
    description: 'Telefone do cliente',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  phone?: string;

  @ApiProperty({
    example: '2023-04-01',
    description: 'Data de nascimento',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  date?: string;

  @ApiProperty({
    example: 'Rua Exemplo, 123, São Paulo - SP',
    description: 'Endereço do cliente',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  address?: string;
}
