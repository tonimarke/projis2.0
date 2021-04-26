import { Router } from 'express';

import PermissaoController from '../controllers/PermissaoController';

const permissaoRouter = Router();

const permissaoController = new PermissaoController();

permissaoRouter.post('/permissao', permissaoController.create);

permissaoRouter.get('/permissoes', permissaoController.findAll);

permissaoRouter.get('/permissao/:id', permissaoController.findOne);

permissaoRouter.put('/permissao', permissaoController.update);

permissaoRouter.delete('/permissao/:id', permissaoController.delete);

export default permissaoRouter;
