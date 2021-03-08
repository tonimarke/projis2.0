import { Router } from 'express';

import estadoCivilRouter from './modules/estado-civil/infra/http/routes/EstadoCivil.routes';
import enderecoRouter from './modules/endereco/infra/http/routes/Endereco.routes';

const routes = Router();

routes.use('/', estadoCivilRouter);
routes.use('/', enderecoRouter);

export default routes;
