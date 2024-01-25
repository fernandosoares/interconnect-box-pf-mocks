import { IsNotEmpty, IsString } from 'class-validator';

export class PfDto {
  @IsNotEmpty({ message: 'O documento não pode ser vazio' })
  @IsString({ message: 'O documento deve ser uma STRING' })
  documento: string;
}
