import { Module } from '@nestjs/common';
import { PfController } from './pf.controller';
import { PfService } from './pf.service';
import { PfUtils } from './pf.utils';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PfController],
  providers: [PfService, PfUtils, JwtService],
})
export class PfModule {}
