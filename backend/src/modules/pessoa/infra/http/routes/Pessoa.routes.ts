import { Router } from 'express';

import PessoaController from '../controllers/PessoController';

const pessoaRouter = Router();

const pessoaController = new PessoaController();

pessoaRouter.post('/pessoa', pessoaController.create);

pessoaRouter.get('/pessoas', pessoaController.findAll);

pessoaRouter.get('/pessoa/:id', pessoaController.findOne);

pessoaRouter.get('/pessoas_type/:name', pessoaController.findByTypePerson);

pessoaRouter.get(
  '/pessoas_search/:name',
  pessoaController.findByTypePersonSearch,
);

pessoaRouter.put('/pessoa', pessoaController.update);

pessoaRouter.delete('/pessoa/:id', pessoaController.delete);

export default pessoaRouter;
