import { Injectable } from '@nestjs/common';
import { QueryByDocNumber } from './pf.types';
import { PfUtils } from './pf.utils';

@Injectable()
export class PfService {
  constructor(private readonly pfUtils: PfUtils) {}
  queryByDocNumber(doc: string): QueryByDocNumber {
    return this.pfUtils.switchDoc(doc);
  }
}
