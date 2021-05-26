export default interface IUpdatePessoaDTO {
  id: string;
  nome: string;
  rg: string;
  cpf: string;
  email: string;
  nome_pai: string;
  nome_mae: string;
  data_nascimento: Date;
  religiao: string;
  previdencia_social: string;
  bpc: string;
  sindicalizado: string;
  situacao: string;
  observacoes: string;
  inicio_vinculo: Date;
  termino_vinculo: Date;
  curso: string;
  periodo: string;
  profissao: string;
  oab: string;
  ocupacao: string;
  estado_civil_id: string;
  tipo_de_pessoa_id: string;
}
