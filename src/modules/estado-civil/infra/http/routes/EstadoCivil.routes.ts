import { Router } from 'express';

import EstadoCivilController from '../controllers/EstadoCivilController';

const estadoCivilRouter = Router();

const estadoCivilController = new EstadoCivilController();

estadoCivilRouter.post('/estado_civil', estadoCivilController.create);

estadoCivilRouter.get('/estados_civis', estadoCivilController.findAll);

estadoCivilRouter.get('/estado_civil/:id', estadoCivilController.findOne);

estadoCivilRouter.put('/estado_civil', estadoCivilController.update);

estadoCivilRouter.delete('/estado_civil/:id', estadoCivilController.delete);

export default estadoCivilRouter;
