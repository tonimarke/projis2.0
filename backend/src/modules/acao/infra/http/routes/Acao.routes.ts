import { Router } from 'express';

import AcaoController from '../controllers/AcaoController';

const acaoRouter = Router();

const acaoController = new AcaoController();

acaoRouter.post('/acao', acaoController.create);

acaoRouter.get('/acoes', acaoController.findAll);

acaoRouter.get('/acao/:id', acaoController.findOne);

acaoRouter.get('/acao_search', acaoController.findByActionSearch);

acaoRouter.put('/acao', acaoController.update);

acaoRouter.delete('/acao/:id', acaoController.delete);

export default acaoRouter;
