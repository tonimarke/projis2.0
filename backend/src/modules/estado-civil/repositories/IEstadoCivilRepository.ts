import EstadoCivil from '../infra/typeorm/entities/EstadoCivil';

export default interface IEstadoCivilRepository {
  create(estado_civil: string): Promise<EstadoCivil>;
  findAll(): Promise<EstadoCivil[] | undefined>;
  findById(id: string): Promise<EstadoCivil | undefined>;
  findByName(estado_civil: string): Promise<EstadoCivil | undefined>;
  save(estado: EstadoCivil): Promise<void>;
  delete(id: string): Promise<string>;
}
