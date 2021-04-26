import { Router } from 'express';
import ProntuarioController from '../controllers/ProntuarioController';

const prontuarioRouter = Router();

const prontuarioController = new ProntuarioController();

prontuarioRouter.post('/prontuario', prontuarioController.create);

prontuarioRouter.get('/prontuarios', prontuarioController.findAll);

prontuarioRouter.get('/prontuario/:id', prontuarioController.findOne);

prontuarioRouter.put('/prontuario', prontuarioController.update);

prontuarioRouter.delete('/prontuario/:id', prontuarioController.delete);

export default prontuarioRouter;
