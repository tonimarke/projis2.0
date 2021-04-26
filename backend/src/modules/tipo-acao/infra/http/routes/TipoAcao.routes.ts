import { Router } from 'express';

import TipoAcaoController from '../controllers/TipoAcaoController';

const tipoAcaoRouter = Router();

const tipoAcaoController = new TipoAcaoController();

tipoAcaoRouter.post('/tipo_acao', tipoAcaoController.create);

tipoAcaoRouter.get('/tipos_acoes', tipoAcaoController.findAll);

tipoAcaoRouter.get('/tipo_acao/:id', tipoAcaoController.findOne);

tipoAcaoRouter.put('/tipo_acao', tipoAcaoController.update);

tipoAcaoRouter.delete('/tipo_acao/:id', tipoAcaoController.delete);

export default tipoAcaoRouter;
