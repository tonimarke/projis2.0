import { Router } from 'express';

import BemImovelController from '../controllers/BemImovelController';

const bemImovelRouter = Router();

const bemImovelController = new BemImovelController();

bemImovelRouter.post('/bem_imovel', bemImovelController.create);

bemImovelRouter.get('/bens_imoveis', bemImovelController.findAll);

bemImovelRouter.get('/bem_imovel/:id', bemImovelController.findOne);

bemImovelRouter.put('/bem_imovel/:id', bemImovelController.update);

bemImovelRouter.delete('/bem_imovel/:id', bemImovelController.delete);

export default bemImovelRouter;
