import { Router } from 'express';

import estadoCivilRouter from './modules/estado-civil/infra/http/routes/EstadoCivil.routes';

const routes = Router();

routes.use('/', estadoCivilRouter);

export default routes;
