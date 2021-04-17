import { Router } from 'express';

import MembroFamiliaController from '../controllers/MembroFamiliaController';

const membroFamiliaController = new MembroFamiliaController();

const membroFamiliaRouter = Router();

membroFamiliaRouter.post('/membro_familia', membroFamiliaController.create);

membroFamiliaRouter.get('/membros_familia', membroFamiliaController.findAll);

membroFamiliaRouter.get('/membro_familia/:id', membroFamiliaController.findOne);

membroFamiliaRouter.put('/membro_familia', membroFamiliaController.update);

membroFamiliaRouter.delete(
  '/membro_familia/:id',
  membroFamiliaController.delete,
);

export default membroFamiliaRouter;
