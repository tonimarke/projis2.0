import { Router } from 'express';

import HabitacaoController from '../controllers/HabitacaoController';

const habitacaoRouter = Router();

const habitacaoController = new HabitacaoController();

habitacaoRouter.post('/habitacao', habitacaoController.create);

habitacaoRouter.get('/habitacoes', habitacaoController.findAll);

habitacaoRouter.get('/habitacao/:id', habitacaoController.findOne);

habitacaoRouter.put('/habitacao', habitacaoController.update);

habitacaoRouter.delete('/habitacao/:id', habitacaoController.delete);

export default habitacaoRouter;
