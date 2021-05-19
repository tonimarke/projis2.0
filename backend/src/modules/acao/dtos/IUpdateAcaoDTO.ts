export default interface IUpdateAcaoDTO {
  id: string;
  providencias: string;
  data_atendimento: Date;
  cliente_id: string;
  parte_contraria_id: string;
  tipos_de_acoes: any[];
}
