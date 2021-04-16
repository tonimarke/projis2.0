export default interface ICreateProntuarioDTO {
  motivo_procura: string;
  dec_hipo: string;
  data_abertura: Date;
  data_encerramento: Date;
  acao_id: string;
  estagiario_id: string;
  encaminhado_por_id: string;
  entrevistado_por_id: string;
  orcamento_familiar_id: string;
  habitacao_id: string;
  declaracao_saude_id: string;
}
