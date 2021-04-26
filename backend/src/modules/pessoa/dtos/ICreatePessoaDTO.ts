export default interface ICreatePessoaDTO {
  nome: string;
  rg: string;
  cpf: string;
  email: string;
  estado_civil_id: string;
  nome_pai: string;
  nome_mae: string;
  data_nascimento: Date;
  endereco_id: string;
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
  tipo_de_pessoa_id: string;
}
