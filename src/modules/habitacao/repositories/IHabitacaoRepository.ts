import { ICreateHabitacaoDTO } from '../dtos/ICreateHabitacaoDTO';
import Habitacao from '../infra/typeorm/entities/Habitacao';

export default interface IHabitacaoRepository {
  create(dataHabitacao: ICreateHabitacaoDTO): Promise<Habitacao>;
  findAll(): Promise<Habitacao[] | undefined>;
  findById(id: string): Promise<Habitacao | undefined>;
  save(dataHabitacao: ICreateHabitacaoDTO): Promise<void>;
  delete(id: string): Promise<string>;
}
