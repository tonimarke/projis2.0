import { Router } from 'express';

import estadoCivilRouter from './modules/estado-civil/infra/http/routes/EstadoCivil.routes';
import enderecoRouter from './modules/endereco/infra/http/routes/Endereco.routes';
import orcamentoFamiliarRouter from './modules/orcamento-familiar/infra/http/routes/OrcamentoFamiliar.routes';
import habitacaoRouter from './modules/habitacao/infra/http/routes/Habitacao.routes';
import saudeRouter from './modules/saude/infra/http/routes/Saude.routes';
import tipoBemImovelRouter from './modules/tipo-bem-imovel/infra/http/routes/TipoBemImovel.routes';
import tipoBemMovelRouter from './modules/tipo-bem-movel/infra/http/routes/TipoBemMovel.routes';

const routes = Router();

routes.use('/', estadoCivilRouter);
routes.use('/', enderecoRouter);
routes.use('/', orcamentoFamiliarRouter);
routes.use('/', habitacaoRouter);
routes.use('/', saudeRouter);
routes.use('/', tipoBemImovelRouter);
routes.use('/', tipoBemMovelRouter);

export default routes;
