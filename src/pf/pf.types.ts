type Situacao = 'regular' | 'irregular';
type Recomendacao = 'reprovar' | 'avaliar' | 'indisponivel';

export type QueryByDocNumber = {
  documento: string;
  situacao: Situacao;
  recomendacao: Recomendacao;
  instrucoes: string;
};
