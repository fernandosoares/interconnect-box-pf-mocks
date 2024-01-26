import { Injectable } from '@nestjs/common';
import { QueryByDocNumber } from './pf.types';

@Injectable()
export class PfUtils {
  searchDoc(doc: string): QueryByDocNumber | null {
    switch (doc) {
      case '83332845071':
        return {
          documento: doc,
          nome: 'Alice Gomes Pinto',
          situacaoDocumento: 'regular',
          recomendacao: 'avaliar',
          informacoes:
            'Considerando a validação das informações pertencentes a essa política da base de dados da Boa Vista SCPC, recomendamos não seguir com esta negociação.',
        };
      case '99330587038':
        return {
          documento: doc,
          nome: 'Victor Rodrigues Oliveira',
          situacaoDocumento: 'irregular',
          recomendacao: 'reprovar',
          informacoes:
            'Considerando a validação das informações pertencentes a essa política da base de dados da Boa Vista SCPC, recomendamos não seguir com esta negociação.',
        };
      case '51138164003':
        return {
          documento: doc,
          nome: 'Breno Fernandes Melo',
          situacaoDocumento: 'regular',
          recomendacao: 'indisponivel',
          informacoes:
            'Considerando a validação das informações pertencentes a essa política da base de dados da Boa Vista SCPC, recomendamos não seguir com esta negociação.',
        };
      default:
        return null;
    }
  }
}
