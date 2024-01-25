import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PfDto } from './pf.dto';
import { PfService } from './pf.service';

@Controller('pf')
export class PfController {
  constructor(
    private readonly pfService: PfService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('/query')
  query(string, @Body() data: PfDto) {
    const query = this.pfService.queryByDocNumber(data.documento);
    if (!query || query === null) {
      throw new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND);
    }

    return query;
  }
}
