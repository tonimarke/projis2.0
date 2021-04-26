import AppError from '../../../shared/error/AppError';
import IUpdateOrcamentoFamiliarDTO from '../dtos/IUpdateOrcamentoFamiliarDTO';
import OrcamentoFamiliar from '../infra/typeorm/entities/OrcamentoFamiliar';
import IOrcamentoFamiliarRepository from '../repositories/IOrcamentoFamiliarRepository';

class UpdateOrcamentoFamiliarService {
  private orcamentoFamiliarRepository: IOrcamentoFamiliarRepository;

  constructor(orcamentoFamiliarRepository: IOrcamentoFamiliarRepository) {
    this.orcamentoFamiliarRepository = orcamentoFamiliarRepository;
  }

  public async execute({
    id,
    alimentacao,
    transporte,
    agua,
    luz,
    telefone,
    internet,
    aluguel,
    convenio_medico,
    medicamentos,
    educacao,
    higiene,
    financiamento,
    outros,
  }: IUpdateOrcamentoFamiliarDTO): Promise<OrcamentoFamiliar> {
    const orcamentoFamiliar = await this.orcamentoFamiliarRepository.findById(
      id,
    );

    if (!orcamentoFamiliar) {
      throw new AppError('Family budget does not exist', 404);
    }

    orcamentoFamiliar.alimentacao = alimentacao;
    orcamentoFamiliar.transporte = transporte;
    orcamentoFamiliar.agua = agua;
    orcamentoFamiliar.luz = luz;
    orcamentoFamiliar.telefone = telefone;
    orcamentoFamiliar.internet = internet;
    orcamentoFamiliar.aluguel = aluguel;
    orcamentoFamiliar.convenio_medico = convenio_medico;
    orcamentoFamiliar.medicamentos = medicamentos;
    orcamentoFamiliar.educacao = educacao;
    orcamentoFamiliar.higiene = higiene;
    orcamentoFamiliar.financiamento = financiamento;
    orcamentoFamiliar.outros = outros;

    await this.orcamentoFamiliarRepository.save(orcamentoFamiliar);

    return orcamentoFamiliar;
  }
}

export default UpdateOrcamentoFamiliarService;
