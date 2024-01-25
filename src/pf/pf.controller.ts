import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PfDto } from './pf.dto';
import { PfService } from './pf.service';

@Controller('pf')
export class PfController {
  constructor(private readonly pfService: PfService) {}

  @Get('/query')
  query(@Body() data: PfDto) {
    const query = this.pfService.queryByDocNumber(data.documento);
    if (!query || query === null) {
      throw new HttpException('Documento não encontrado', HttpStatus.NOT_FOUND);
    }

    return query;
  }
}
