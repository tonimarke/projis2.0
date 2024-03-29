import { Router } from 'express';

import PessoaController from '../controllers/PessoController';

const pessoaRouter = Router();

const pessoaController = new PessoaController();

pessoaRouter.post('/pessoa', pessoaController.create);

pessoaRouter.get('/pessoas', pessoaController.findAll);

pessoaRouter.get('/pessoa/:id', pessoaController.findOne);

pessoaRouter.put('/pessoa', pessoaController.update);

pessoaRouter.delete('/pessoa/:id', pessoaController.delete);

export default pessoaRouter;
