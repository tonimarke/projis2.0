import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import Endereco from '../../../../modules/endereco/infra/typeorm/entities/Endereco';

export default class EnderecoSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Endereco)
      .values([
        {
          logradouro: 'Rua Hélio Rodrigues Ferreira',
          numero: '222',
          bairro: 'Cuiá',
          complemento: 'Casa',
          cep: '58075-646',
          cidade: 'João Pessoa',
          estado: 'PB',
        },
        {
          logradouro: 'Rua Aquários',
          numero: '598',
          bairro: 'Conjunto Universitário',
          complemento: 'Casa',
          cep: '69917-704',
          cidade: 'Rio Branco',
          estado: 'AC',
        },
        {
          logradouro: 'Rua Porto Calvo',
          numero: '165',
          bairro: 'Vila Santo Eugênio',
          complemento: 'Casa',
          cep: '79060-520',
          cidade: 'Campo Grande',
          estado: 'MS',
        },
        {
          logradouro: 'Rua Águas Claras',
          numero: '564',
          bairro: 'Loteamento Panorama',
          complemento: 'Casa',
          cep: '77824-230',
          cidade: 'Araguaína',
          estado: 'TO',
        },
        {
          logradouro: 'Avenida Raimundo Dias Tomaz',
          numero: '711',
          bairro: 'Muruci (Fazendinha)',
          complemento: 'Casa',
          cep: '68911-400',
          cidade: 'Macapá',
          estado: 'AP',
        },
        {
          logradouro: 'Rua Maranhão',
          numero: '125',
          bairro: 'Cidade Luz',
          complemento: 'Casa',
          cep: '04877-225',
          cidade: 'São Paulo',
          estado: 'SP',
        },
        {
          logradouro: 'Rua Catarina Dário Martinhago',
          numero: '766',
          bairro: 'Mina do Mato',
          complemento: 'Casa',
          cep: '88810-510',
          cidade: 'Criciúma',
          estado: 'SC',
        },
        {
          logradouro: 'Rua Boa Vista',
          numero: '713',
          bairro: 'Marimbá',
          complemento: 'Casa',
          cep: '32623-464',
          cidade: 'Betim',
          estado: 'MG',
        },
        {
          logradouro: 'Rua Ignacio Gonçalves',
          numero: '950',
          bairro: 'São Lourenço',
          complemento: 'Casa',
          cep: '86043-310',
          cidade: 'Londrina',
          estado: 'PR',
        },
        {
          logradouro: 'Rua Tijucas',
          numero: '178',
          bairro: 'Potengi',
          complemento: 'Caso',
          cep: '59110-400',
          cidade: 'Natal',
          estado: 'RN',
        },
      ])
      .execute();
  }
}
