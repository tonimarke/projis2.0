import { Router } from 'express';
import EstagiarioSupervisorController from '../controllers/EstagiarioSupervisorController';

const estagiarioSupervisorRouter = Router();

const estagiarioSupervisorController = new EstagiarioSupervisorController();

estagiarioSupervisorRouter.post(
  '/estagiario_supervisor',
  estagiarioSupervisorController.create,
);

estagiarioSupervisorRouter.get(
  '/estagiarios_supervisores',
  estagiarioSupervisorController.findAll,
);

estagiarioSupervisorRouter.get(
  '/estagiario_supervisor/:id',
  estagiarioSupervisorController.findOne,
);

estagiarioSupervisorRouter.put(
  '/estagiario_supervisor',
  estagiarioSupervisorController.update,
);

estagiarioSupervisorRouter.delete(
  '/estagiario_supervisor/:id',
  estagiarioSupervisorController.delete,
);

export default estagiarioSupervisorRouter;
