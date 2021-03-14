import { Router } from 'express';
import SaudeController from '../controllers/SaudeController';

const saudeRouter = Router();

const saudeController = new SaudeController();

saudeRouter.post('/saude', saudeController.create);

saudeRouter.get('/saudes', saudeController.findAll);

saudeRouter.get('/saude/:id', saudeController.findOne);

saudeRouter.put('/saude', saudeController.update);

saudeRouter.delete('/saude/:id', saudeController.delete);

export default saudeRouter;
