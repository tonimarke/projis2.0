import { Router } from 'express';

import estadoCivilRouter from './modules/estado-civil/infra/http/routes/EstadoCivil.routes';
import enderecoRouter from './modules/endereco/infra/http/routes/Endereco.routes';
import orcamentoFamiliarRouter from './modules/orcamento-familiar/infra/http/routes/OrcamentoFamiliar.routes';

const routes = Router();

routes.use('/', estadoCivilRouter);
routes.use('/', enderecoRouter);
routes.use('/', orcamentoFamiliarRouter);

export default routes;
