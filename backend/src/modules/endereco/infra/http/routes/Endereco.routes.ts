import { Router } from 'express';

import EnderecoController from '../controllers/EnderecoController';

const enderecoRouter = Router();

const enderecoController = new EnderecoController();

enderecoRouter.post('/endereco', enderecoController.create);

enderecoRouter.get('/enderecoes', enderecoController.findAll);

enderecoRouter.get('/endereco/:id', enderecoController.findOne);

enderecoRouter.put('/endereco', enderecoController.update);

enderecoRouter.delete('/endereco/:id', enderecoController.delete);

export default enderecoRouter;
