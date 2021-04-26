import { Router } from 'express';
import TelefoneController from '../controllers/TelefoneController';

const telefoneRouter = Router();

const telefoneController = new TelefoneController();

telefoneRouter.post('/telefone', telefoneController.create);

telefoneRouter.get('/telefones', telefoneController.findAll);

telefoneRouter.get('/telefone/:id', telefoneController.findOne);

telefoneRouter.put('/telefone', telefoneController.update);

telefoneRouter.delete('/telefone/:id', telefoneController.delete);

export default telefoneRouter;
