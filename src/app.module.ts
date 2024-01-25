import { Module } from '@nestjs/common';
import { PfModule } from './pf/pf.module';

@Module({
  imports: [PfModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
