export default interface IUpdateProntuarioDTO {
  id: string;
  motivo_procura: string;
  dec_hipo: string;
  telefone: string;
  gasto_familiar: string;
  status_habitacao: string;
  status_saude: string;
  valor_bens_imoveis: string;
  valor_bens_moveis: string;
  sinotico: string;
  data_abertura: Date;
  data_encerramento: Date;
}
