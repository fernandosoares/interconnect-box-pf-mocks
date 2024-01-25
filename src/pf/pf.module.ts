import { Module } from '@nestjs/common';
import { PfController } from './pf.controller';
import { PfService } from './pf.service';
import { PfUtils } from './pf.utils';

@Module({
  controllers: [PfController],
  providers: [PfService, PfUtils],
})
export class PfModule {}
