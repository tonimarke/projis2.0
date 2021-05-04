import { Router } from 'express';

import estadoCivilRouter from './modules/estado-civil/infra/http/routes/EstadoCivil.routes';
import tipoDePessoaRouter from './modules/tipo-de-pessoa/infra/http/routes/TipoDePessoa.routes';
import enderecoRouter from './modules/endereco/infra/http/routes/Endereco.routes';
import tipoAcaoRouter from './modules/tipo-acao/infra/http/routes/TipoAcao.routes';
import pessoaRouter from './modules/pessoa/infra/http/routes/Pessoa.routes';
import estagiarioSupervisorRouter from './modules/estagiario-supervisor/infra/http/routes/EstagiarioSupervisor.routes';
import acaoRouter from './modules/acao/infra/http/routes/Acao.routes';
import prontuarioRouter from './modules/prontuario/infra/http/routes/Prontuario.routes';
import membroFamiliaRouter from './modules/membro-familia/infra/http/routes/MembroFamilia.routes';
import prontuarioSupervisorRouter from './modules/prontuario-supervisor/infra/http/routes/ProntuarioSupervisor.routes';

import permissaoRouter from './modules/permissao/infra/http/routes/Permissao.routes';
import usuarioRouter from './modules/usuario/infra/http/routes/Usuario.routes';
import sessionsRouter from './modules/usuario/infra/http/routes/Session.routes';

const routes = Router();

routes.use('/', estadoCivilRouter);
routes.use('/', tipoDePessoaRouter);
routes.use('/', enderecoRouter);
routes.use('/', tipoAcaoRouter);
routes.use('/', pessoaRouter);
routes.use('/', estagiarioSupervisorRouter);
routes.use('/', acaoRouter);
routes.use('/', prontuarioRouter);
routes.use('/', membroFamiliaRouter);
routes.use('/', prontuarioSupervisorRouter);

routes.use('/', permissaoRouter);
routes.use('/', usuarioRouter);
routes.use('/', sessionsRouter);

export default routes;
