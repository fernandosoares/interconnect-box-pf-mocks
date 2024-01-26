type Situacao = 'regular' | 'irregular';
type Recomendacao = 'reprovar' | 'avaliar' | 'indisponivel';

export type QueryByDocNumber = {
  documento: string;
  nome: string,
  situacaoDocumento: Situacao;
  recomendacao: Recomendacao;
  informacoes: string;
};
