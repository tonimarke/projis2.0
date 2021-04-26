import { Router } from 'express';
import ProntuarioSupervisorController from '../controllers/ProntuarioSupervisorController';

const prontuarioSupervisorRouter = Router();

const prontuarioSupervisorController = new ProntuarioSupervisorController();

prontuarioSupervisorRouter.post(
  '/prontuario_supervisor',
  prontuarioSupervisorController.create,
);

prontuarioSupervisorRouter.get(
  '/prontuarios_supervisores',
  prontuarioSupervisorController.findAll,
);

prontuarioSupervisorRouter.get(
  '/prontuario_supervisor/:id',
  prontuarioSupervisorController.findOne,
);

prontuarioSupervisorRouter.put(
  '/prontuario_supervisor',
  prontuarioSupervisorController.update,
);

prontuarioSupervisorRouter.delete(
  '/prontuario_supervisor/:id',
  prontuarioSupervisorController.delete,
);

export default prontuarioSupervisorRouter;
