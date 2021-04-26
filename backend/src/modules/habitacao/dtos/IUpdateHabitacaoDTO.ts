export default interface IUpdateHabitacaoDTO {
  id: string;
  situacao: string;
  valor_aluguel: number;
  quantidade_dormitorios: number;
  quantidade_salas: number;
  quantidade_copas: number;
  quantidade_cozinhas: number;
  quantidade_areas_servico: number;
  quantidade_garagens: number;
  pintura: string;
  piso: string;
  contra_piso: number;
  laje: number;
  forro_madeira: number;
  sem_forro: number;
}
