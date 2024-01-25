import { Injectable } from '@nestjs/common';
import { QueryByDocNumber } from './pf.types';

@Injectable()
export class PfUtils {
  switchDoc(doc: string): QueryByDocNumber | null {
    switch (doc) {
      case '83332845071':
        return {
          documento: doc,
          recomendacao: 'avaliar',
          instrucoes: 'Avaliar',
          situacao: 'regular',
        };
      case '99330587038':
        return {
          documento: doc,
          recomendacao: 'reprovar',
          instrucoes: 'Reprovar',
          situacao: 'irregular',
        };
      case '51138164003':
        return {
          documento: doc,
          recomendacao: 'indisponivel',
          instrucoes: 'Indisponível',
          situacao: 'regular',
        };
      case '00000000191':
        return {
          documento: doc,
          recomendacao: 'indisponivel',
          instrucoes: 'Indisponível',
          situacao: 'regular',
        };
      default:
        return null;
    }
  }
}
