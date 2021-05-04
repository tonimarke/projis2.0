export default interface ICreateProntuarioDTO {
  motivo_procura: string;
  dec_hipo: string;
  data_abertura: Date;
  data_encerramento: Date;
  telefone: string;
  gasto_familiar: string;
  status_habitacao: string;
  status_saude: string;
  valor_bens_imoveis: string;
  valor_bens_moveis: string;
  sinotico: string;
  acao_id: string;
  estagiario_id: string;
  encaminhado_por_id: string;
  entrevistado_por_id: string;
}
